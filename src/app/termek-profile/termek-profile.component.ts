import { Component, OnInit } from '@angular/core';
import { TermekService, ApiTermekByIdGetParams } from '../controllers/Termek';
import { ActivatedRoute } from '@angular/router';
import { Termek, Vevo } from '../model';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { KosarService, KosaridKosarIdMennyisegMennyisegParams, ByVevoIdVevoIdParams } from '../controllers/Kosar';

@Component({
  selector: 'app-termek-profile',
  templateUrl: './termek-profile.component.html',
  styleUrls: ['./termek-profile.component.css']
})
export class TermekProfileComponent implements OnInit {

  constructor(private termekService: TermekService,
    private kosarService: KosarService,
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthService
  ) { }

  public loadedTermek: Termek;
  private vevo: Vevo;

  ngOnInit() {
    this.LoadTermek();
  }

  LoadTermek(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.termekService.apiTermekByIdGet(<ApiTermekByIdGetParams>{ id: id }).subscribe(data => {
      this.loadedTermek = (<Termek[]>data)[0];
    });
  }

  LoadVevo(): void {
    this.vevo = JSON.parse(sessionStorage.getItem("vevo"));
  }

  GoBack(): void {
    this.location.back();
  }

  LoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  addTermek() {
    if (!this.loadedTermek) return;
    this.LoadVevo();
    if (!this.vevo) return;
    this.kosarService.byVevoIdVevoId(<ByVevoIdVevoIdParams>{ vevoId: this.vevo.id }).subscribe(kosars => {
      const kosid = kosars.find(kosar => kosar.statuszId===1).id
      console.log(kosid);

      this.kosarService.kosaridKosarIdMennyisegMennyiseg(<KosaridKosarIdMennyisegMennyisegParams>{ kosarId: kosid, termek: this.loadedTermek, mennyiseg: 1 })
        .subscribe(data => data, err => alert(err.Message));
    });

  }



}
