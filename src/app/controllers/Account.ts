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

export interface AccountParams {
  model?: __model.RegistrationViewModel;
}

@Injectable()
export class AccountService {

  baseUrl = "http://localhost:54920"

  constructor(private http: HttpClient) {}

  /** http://undefinedundefined/swagger-ui.html#!/Account/ApiV2.0AccountPost */
  account(params: AccountParams): Observable<void> {
    const bodyParams = params.model;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<void>(this.baseUrl + `/api/v2.0/Account`, bodyParamsWithoutUndefined);
  }
}
