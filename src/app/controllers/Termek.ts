/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as __model from '../model';

export interface ApiV20TermekByIdGetParams {
  /** format: int32 */
  id: number;
}

export interface ByNameParams {
  name?: string;
}

export interface ByKategoryParams {
  /** format: int32 */
  katid?: number;
}

@Injectable()
export class TermekService {

  baseUrl = "http://localhost:54920"

  constructor(private http: HttpClient) {}

  /** http://undefinedundefined/swagger-ui.html#!/Termek/ApiV2.0TermekGet */
  apiV20TermekGet(): Observable<__model.Termek[]> {
    return this.http.get<__model.Termek[]>(this.baseUrl +`/api/v2.0/Termek`);
  }

  /** http://undefinedundefined/swagger-ui.html#!/Termek/ApiV2.0TermekByIdGet */
  apiV20TermekByIdGet(params: ApiV20TermekByIdGetParams): Observable<__model.Termek> {
    const pathParams = {
      id: params.id,
    };
    return this.http.get<__model.Termek>(this.baseUrl +`/api/v2.0/Termek/${pathParams.id}`);
  }

  /** http://undefinedundefined/swagger-ui.html#!/Termek/ApiV2.0TermekByNameGet */
  byName(params: ByNameParams): Observable<__model.Termek[]> {
    const queryParamBase = {
      name: params.name,
    };

    let queryParams = new HttpParams();
    Object.entries(queryParamBase).forEach(([key, value]) => {
      if (value !== undefined) {
        if (typeof value === 'string') queryParams = queryParams.set(key, value);
        else queryParams = queryParams.set(key, JSON.stringify(value));
      }
    });

    return this.http.get<__model.Termek[]>(this.baseUrl +`/api/v2.0/Termek/byName`, {params: queryParams});
  }

  /** http://undefinedundefined/swagger-ui.html#!/Termek/ApiV2.0TermekByKategoryGet */
  byKategory(params: ByKategoryParams): Observable<__model.Termek[]> {
    const queryParamBase = {
      katid: params.katid,
    };

    let queryParams = new HttpParams();
    Object.entries(queryParamBase).forEach(([key, value]) => {
      if (value !== undefined) {
        if (typeof value === 'string') queryParams = queryParams.set(key, value);
        else queryParams = queryParams.set(key, JSON.stringify(value));
      }
    });

    return this.http.get<__model.Termek[]>(this.baseUrl +`/api/v2.0/Termek/byKategory`, {params: queryParams});
  }
}
