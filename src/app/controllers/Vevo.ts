/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as __model from '../model';

export interface VevoParams {
  name: string;
}

export interface NameNameEmailEmailSzamlaszSzamlaParams {
  name: string;
  email: string;
  szamla: string;
}

@Injectable()
export class VevoService {

  private baseUrl : string = "http://localhost:54920"
  constructor(private http: HttpClient) {}

  /** http://undefinedundefined/swagger-ui.html#!/Vevo/ApiVevoByNameGet */
  vevo(params: VevoParams): Observable<__model.Vevo> {
    const pathParams = {
      name: params.name,
    };
    return this.http.get<__model.Vevo>(this.baseUrl + `/api/Vevo/${pathParams.name}`);
  }

  /** http://undefinedundefined/swagger-ui.html#!/Vevo/ApiVevoName={name}&email={email}&szamlasz={szamlaPost */
  nameNameEmailEmailSzamlaszSzamla(params: NameNameEmailEmailSzamlaszSzamlaParams): Observable<void> {
    const pathParams = {
      name: params.name,
      email: params.email,
      szamla: params.szamla,
    };
    return this.http.post<void>(this.baseUrl + `/api/Vevo/name=${pathParams.name}&email=${pathParams.email}&szamlasz=${pathParams.szamla}`, {});
  }
}
