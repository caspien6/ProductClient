import { Component, OnInit } from '@angular/core';
import { Kategoria } from '../model';
import { CategoryService } from '../controllers/Category';

@Component({
  selector: 'app-category-termek-finder',
  templateUrl: './category-termek-finder.component.html',
  styleUrls: ['./category-termek-finder.component.css']
})
export class CategoryTermekFinderComponent implements OnInit {

  kategoriak: Kategoria[];
  public show:boolean = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllCategory();
  }

  isMainCategory(t: Kategoria): boolean {
    console.log(t.nev +'  ' + t.alkategoria);
    return t.alkategoria === null ? true : false;
  }

  getAllCategory() {
    this.categoryService.apiKategoryGet().subscribe(data => {
      this.kategoriak = <Kategoria[]>data;
    });
  }

}
