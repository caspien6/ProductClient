import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ITermek } from '../dto/termek-interface';
import { Conditional } from '@angular/compiler';

import { TermekService, ByNameParams } from '../controllers/Termek';
import { ApiTermekGetModule } from '../store/termek/apiTermekGet/apiTermekGet.module';
import { Termek, Kategoria } from '../model';
import { CategoryService, ApiKategoryByIdGetParams } from '../controllers/Category';


@Component({
  selector: 'app-termekek-display',
  templateUrl: './termekek-display.component.html',
  styleUrls: ['./termekek-display.component.css'],
  providers: [TermekService]
})
export class TermekekDisplayComponent implements OnInit {

  searchText: string='';
  categoryText: string='';
  
  constructor(private productservice: ProductService, 
    private termekService : TermekService,
    private categoryService: CategoryService
  ) { }

  termekek: Termek[];
  kategoriak: Kategoria[];

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    /*this.productservice.getProducts().subscribe(data => {
      this.termekek = data;
    });*/
    
    this.termekService.apiTermekGet().subscribe(data => {
      this.termekek = data;
    });
    this.categoryService.apiKategoryGet().subscribe(data => {
      this.kategoriak = data;
    });
    

  }

  getTermeks(){
    if (this.searchText !== ''){
      this.termekService.byName(<ByNameParams>{name: this.searchText}).subscribe(data => {
        this.termekek = <Termek[]>data;
      });
    }
  }

  getCategory(){
    if (this.categoryText !== ''){
      this.categoryService.apiKategoryByIdGet(<ApiKategoryByIdGetParams>{id: Number.parseInt(this.categoryText)}).subscribe(data => {
        this.kategoriak = <Kategoria[]>data;
      });
    }
    else{
      this.initializeData();
    }
    
  }

}
