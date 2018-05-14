import { Component, OnInit } from '@angular/core';
import { VevoService, VevoParams } from './controllers/Vevo';
import { Vevo } from './model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userName: string;
  welcometext: string;

  constructor(private vevoService: VevoService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const vev = sessionStorage.getItem('vevo');
    vev ? this.authService.login() : '';
  }

  onSignIn() {
    if (!this.userName) { console.log("nem jó username"); return; }
    this.vevoService.vevo(<VevoParams>{ name: this.userName }).subscribe(data => {
      sessionStorage.setItem("vevo", JSON.stringify(data));
      this.authService.login();
    });
  }

  jsonUserLoggedIn(): boolean {
    let vevo = sessionStorage.getItem('vevo');
    if (vevo != null) {
      this.welcometext = (<Vevo>JSON.parse(vevo)).nev;
    }
    return vevo != null;
  }

  onLogout(): void {
    sessionStorage.removeItem('vevo');
    this.authService.logout();
    window.location.reload();
  }

}
