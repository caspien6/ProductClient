import { Component, OnInit } from '@angular/core';
import { Vevo } from '../model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  vevo: Vevo;

  constructor() { }

  ngOnInit() {
    this.vevo = JSON.parse(sessionStorage.getItem('vevo'));
    if (this.vevo)return;
  }

}
