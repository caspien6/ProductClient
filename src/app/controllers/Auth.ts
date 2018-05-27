/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as __model from '../model';

export interface LoginParams {
  credentials?: __model.CredentialsViewModel;
}

@Injectable()
export class AuthService {

  baseUrl =  "http://localhost:54920/"

  constructor(private http: HttpClient) {}

  /** http://undefinedundefined/swagger-ui.html#!/Auth/ApiV2.0AuthLoginPost */
  login(params: LoginParams): Observable<__model.JwtScheme> {
    const bodyParams = params.credentials;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.JwtScheme>(this.baseUrl +`api/v2.0/Auth/login`, bodyParamsWithoutUndefined);
  }
}
