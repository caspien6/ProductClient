import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay, tap } from 'rxjs/operators';
import { BaseService } from './base.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { BehaviorSubject } from 'rxjs/Rx';
import { AuthService, LoginParams } from './controllers/Auth';
import { VevoService, VevoParams } from './controllers/Vevo';
import { Vevo } from './model';

@Injectable()
export class AuthenticationService extends BaseService {

  baseUrl: string = '';

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: Http,
    private authService: AuthService,
    private vevoService: VevoService) {

    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
  }

  /*register(email: string, password: string, firstName: string, lastName: string, location: string): Observable<UserRegistration> {
    let body = JSON.stringify({ email, password, firstName, lastName, location });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + "/accounts", body, options)
      .map(res => true)
      .catch(this.handleError);
  }*/

  login(userName, password) {

    return this.authService.login(<LoginParams>{ credentials: { userName: userName, password: password } })
      .map( res=> {
        localStorage.setItem('auth_token', res.auth_token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);

        let vevo: Vevo;
        let obsVevo = this.vevoService.vevo(<VevoParams>{ name: userName }).map(data => {
          sessionStorage.setItem('vevo', JSON.stringify(data));
          return data.nev;
        });

        return obsVevo
      })


  }

  logout() {
    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('vevo');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}
