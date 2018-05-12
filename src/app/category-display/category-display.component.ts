import { Component, OnInit, Input } from '@angular/core';
import { Kategoria } from '../model';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.css']
})
export class CategoryDisplayComponent implements OnInit {

  @Input("category")
  category: Kategoria;

  constructor() { }

  ngOnInit() {
  }

}
