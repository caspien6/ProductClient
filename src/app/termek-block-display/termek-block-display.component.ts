import { Component, OnInit, Input } from '@angular/core';
import { ITermek } from '../dto/termek-interface';
import { Termek } from '../model';

@Component({
  selector: 'app-termek-block-display',
  templateUrl: './termek-block-display.component.html',
  styleUrls: ['./termek-block-display.component.css']
})
export class TermekBlockDisplayComponent implements OnInit {

  @Input("product")
  termek: Termek;

  constructor() { }

  ngOnInit() {
    
  }

}
