import { Component, OnInit } from '@angular/core';
import { TermekService, ByKategoryParams } from '../controllers/Termek';
import { ActivatedRoute } from '@angular/router';
import { Termek } from '../model';

@Component({
  selector: 'app-termek-foundedby-category',
  templateUrl: './termek-foundedby-category.component.html',
  styleUrls: ['./termek-foundedby-category.component.css']
})
export class TermekFoundedbyCategoryComponent implements OnInit {

  public termekek : Termek[];

  constructor(private termekService: TermekService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.findTermekByKategoryName();
  }

  findTermekByKategoryName(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.termekService.byKategory(<ByKategoryParams>{ katid: id }).subscribe(data => {
      this.termekek = data;
    });
  }

}
