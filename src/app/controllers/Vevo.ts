/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as __model from '../model';
import { RequestOptions } from '@angular/http';

export interface VevoParams {
  name: string;
}

@Injectable()
export class VevoService {

  baseUrl = "http://localhost:54920"

  constructor(private http: HttpClient) {}

  /** http://undefinedundefined/swagger-ui.html#!/Vevo/ApiV2.0VevoByNameGet */
  vevo(params: VevoParams): Observable<__model.Vevo> {

    let header = new HttpHeaders();
    header = header.set('Authorization','Bearer '+ localStorage.getItem('auth_token'));
    const pathParams = {
      name: params.name,
    };
    return this.http.get<__model.Vevo>(this.baseUrl +`/api/v2.0/Vevo/${pathParams.name}`, {headers: header});
  }
}
