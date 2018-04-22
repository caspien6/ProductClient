import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ITermek } from '../model/termek-interface';
import { Conditional } from '@angular/compiler';

@Component({
  selector: 'app-termekek-display',
  templateUrl: './termekek-display.component.html',
  styleUrls: ['./termekek-display.component.css']
})
export class TermekekDisplayComponent implements OnInit {

  searchText: string='';
  
  constructor(private productservice: ProductService) { }

  termekek: ITermek[];

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.productservice.getProducts().subscribe(data => {
      this.termekek = data;
    });
  }

  getTermeks(){
    if (this.searchText !== ''){
      this.productservice.getProductsByName(this.searchText).subscribe(data => {
        this.termekek = data;
      });
    }
    else{
      this.initializeData();
    }
    
  }

}
