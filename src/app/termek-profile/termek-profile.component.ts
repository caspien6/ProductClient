import { Component, OnInit } from '@angular/core';
import { TermekService, ApiTermekByIdGetParams } from '../controllers/Termek';
import { ActivatedRoute } from '@angular/router';
import { Termek } from '../model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-termek-profile',
  templateUrl: './termek-profile.component.html',
  styleUrls: ['./termek-profile.component.css']
})
export class TermekProfileComponent implements OnInit {

  constructor(private termekService: TermekService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  public loadedTermek : Termek;

  ngOnInit() {
    this.LoadTermek();
  }

  LoadTermek(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.termekService.apiTermekByIdGet(<ApiTermekByIdGetParams>{id: id} ).subscribe(data => {
      this.loadedTermek = (<Termek[]>data)[0];
    });
  }

  GoBack():void{
    this.location.back();
  }

}
