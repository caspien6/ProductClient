import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ITermek } from '../dto/termek-interface';
import { Conditional } from '@angular/compiler';

import { TermekService } from '../controllers/Termek';
import { ApiTermekGetModule } from '../store/termek/apiTermekGet/apiTermekGet.module';
import { Termek } from '../model';


@Component({
  selector: 'app-termekek-display',
  templateUrl: './termekek-display.component.html',
  styleUrls: ['./termekek-display.component.css'],
  providers: [TermekService]
})
export class TermekekDisplayComponent implements OnInit {

  searchText: string='';
  
  constructor(private productservice: ProductService, private termekService : TermekService) { }

  termekek: Termek[];

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
