import { Component, OnInit } from '@angular/core';
import { KosarService, ByVevoIdVevoIdParams } from '../controllers/Kosar';
import { Kosar, Vevo } from '../model';

@Component({
  selector: 'app-kosar-main',
  templateUrl: './kosar-main.component.html',
  styleUrls: ['./kosar-main.component.css']
})
export class KosarMainComponent implements OnInit {

  constructor(private kosarService: KosarService) { }

  kosars : Kosar[];

  ngOnInit() {
    this.loadKosars();
    
  }

  loadKosars(){
    const id = (<Vevo>JSON.parse(sessionStorage.getItem('vevo'))).id;
    if (!id) return;
    this.kosarService.byVevoIdVevoId(<ByVevoIdVevoIdParams>{vevoId: id})
      .subscribe(data => this.kosars = data, err => alert(err));
    
  }

}
