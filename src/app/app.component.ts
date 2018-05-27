import { Component, OnInit } from '@angular/core';
import { VevoService, VevoParams } from './controllers/Vevo';
import { Vevo } from './model';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userName: string;
  password: string;
  welcometext: string;

  constructor(private vevoService: VevoService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    if (this.jsonUserLoggedIn()) {      
      this.welcometext = (<Vevo>JSON.parse(sessionStorage.getItem('vevo'))).nev;
    }
    
  }

  onSignIn() {
    
    if (!this.userName) { console.log("nem jó username"); return; }
    this.authenticationService.login(this.userName, this.password).subscribe((obsVevo) =>{
      obsVevo.subscribe(welc=> this.welcometext=welc);
    });

  }

  jsonUserLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  onLogout(): void {
    this.authenticationService.logout();
    window.location.reload();
  }

}
