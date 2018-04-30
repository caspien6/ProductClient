/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  /** http://undefinedundefined/swagger-ui.html#!/Account/AccountLogoutPost */
  logout(): Observable<void> {
    return this.http.post<void>(`/Account/Logout`, '');
  }
}
