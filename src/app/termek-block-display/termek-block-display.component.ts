import { Component, OnInit, Input } from '@angular/core';
import { ITermek } from '../model/termek-interface';

@Component({
  selector: 'app-termek-block-display',
  templateUrl: './termek-block-display.component.html',
  styleUrls: ['./termek-block-display.component.css']
})
export class TermekBlockDisplayComponent implements OnInit {

  @Input("product")
  termek: ITermek;

  constructor() { }

  ngOnInit() {
    
  }

}
