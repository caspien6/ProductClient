import { Component, OnInit } from '@angular/core';
import { KosarService, ByVevoIdVevoIdParams } from '../controllers/Kosar';
import { Kosar, Vevo, Termek, KosarTetel } from '../model';
import { TermekService, ApiTermekByIdGetParams } from '../controllers/Termek';
import { KosarTetelTermek } from '../dto/termek-interface';

@Component({
  selector: 'app-kosar-main',
  templateUrl: './kosar-main.component.html',
  styleUrls: ['./kosar-main.component.css']
})
export class KosarMainComponent implements OnInit {

  constructor(private kosarService: KosarService,
    private termekService: TermekService
  ) { }

  kosars : Kosar[];
  public ktetelTermek: KosarTetelTermek[] = []

  ngOnInit() {
    this.loadKosars();
    
  }

  loadKosars(){
    const id = (<Vevo>JSON.parse(sessionStorage.getItem('vevo'))).id;
    if (!id) return;
    this.kosarService.byVevoIdVevoId(<ByVevoIdVevoIdParams>{vevoId: id})
      .subscribe(data => {
        this.kosars = data;
        this.kosars.forEach(kosar => 
          kosar.kosarTetel.forEach(ktetel => {
            this.loadTermek(ktetel);
          })
        );
      }, err => alert(err));
    
  }

  loadTermek(kosarTetel: KosarTetel){
    this.termekService.apiTermekByIdGet(<ApiTermekByIdGetParams>{id: kosarTetel.termekId}).subscribe(data => {
      this.ktetelTermek.push(new KosarTetelTermek(kosarTetel,(<Termek[]>data)[0] ));
      console.log(data);
      
    }, err=> console.log("hiba a betöltéskor"), () => this.ktetelTermek.sort( (a,b) => {
      if (a.termek.nev.toLowerCase() >  b.termek.nev.toLowerCase()) {
        return 1;
      }
      else if (a.termek.nev.toLowerCase() <  b.termek.nev.toLowerCase()){
        return -1;
      }
      else{
        return 0;
      }
    }));
  }

}
