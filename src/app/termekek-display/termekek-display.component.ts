import { Component, OnInit } from '@angular/core';
import { Conditional } from '@angular/compiler';

import { TermekService, ByNameParams } from '../controllers/Termek';
import { ApiV20TermekGetModule } from '../store/termek/apiV20TermekGet/apiV20TermekGet.module';
import { Termek, Kategoria } from '../model';
import { CategoryService, ApiV20CategoryByIdGetParams } from '../controllers/Category';


@Component({
  selector: 'app-termekek-display',
  templateUrl: './termekek-display.component.html',
  styleUrls: ['./termekek-display.component.css'],
  providers: [TermekService]
})
export class TermekekDisplayComponent implements OnInit {

  searchText: string = '';
  categoryText: string = '';

  constructor(private termekService: TermekService,
    private categoryService: CategoryService
  ) { }

  termekek: Termek[];
  kategoriak: Kategoria[];

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.termekService.apiV20TermekGet().subscribe(data => {
      this.termekek = data;
    });
    this.categoryService.apiV20CategoryGet().subscribe(data => {
      this.kategoriak = data;
    });
  }

  getTermeks() {
    if (this.searchText !== '') {
      this.termekService.byName(<ByNameParams>{ name: this.searchText }).subscribe(data => {
        this.termekek = <Termek[]>data;
      });
    }
  }

  getCategory() {
    if (this.categoryText !== '') {
      this.categoryService.apiV20CategoryByIdGet(<ApiV20CategoryByIdGetParams>{ id: Number.parseInt(this.categoryText) }).subscribe(data => {
        this.kategoriak = <Kategoria[]>data;
      });
    }
    else {
      this.initializeData();
    }
  }

  

}
