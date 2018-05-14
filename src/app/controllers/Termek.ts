/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as __model from '../model';

export interface ApiTermekByIdGetParams {
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

  private baseUrl : string = "http://localhost:54920"
  constructor(private http: HttpClient) {}

  /** http://undefinedundefined/swagger-ui.html#!/Termek/ApiTermekGet */
  apiTermekGet(): Observable<__model.Termek[]> {
    return this.http.get<__model.Termek[]>(this.baseUrl + `/api/Termek`);
  }

  /** http://undefinedundefined/swagger-ui.html#!/Termek/ApiTermekByIdGet */
  apiTermekByIdGet(params: ApiTermekByIdGetParams): Observable<__model.Termek> {
    const pathParams = {
      id: params.id,
    };
    return this.http.get<__model.Termek>(this.baseUrl + `/api/Termek/${pathParams.id}`);
  }

  /** http://undefinedundefined/swagger-ui.html#!/Termek/ApiTermekByNameGet */
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

    return this.http.get<__model.Termek[]>(this.baseUrl + `/api/Termek/byName`, {params: queryParams});
  }

  /** http://undefinedundefined/swagger-ui.html#!/Termek/ApiTermekByKategoryGet */
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

    return this.http.get<__model.Termek[]>(this.baseUrl + `/api/Termek/byKategory`, {params: queryParams});
  }

  /** http://undefinedundefined/swagger-ui.html#!/Termek/ErrorGet */
  error(): Observable<void> {
    return this.http.get<void>(`/error`);
  }
}
