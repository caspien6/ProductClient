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

export interface ApiV20CategoryByIdGetParams {
  /** format: int32 */
  id: number;
}

export interface ByNameParams {
  name?: string;
}

@Injectable()
export class CategoryService {

  baseUrl = "http://localhost:54920"

  constructor(private http: HttpClient) {}

  /** http://undefinedundefined/swagger-ui.html#!/Category/ApiV2.0CategoryGet */
  apiV20CategoryGet(): Observable<__model.Kategoria[]> {
    return this.http.get<__model.Kategoria[]>(this.baseUrl + `/api/v2.0/Category`);
  }

  /** http://undefinedundefined/swagger-ui.html#!/Category/ApiV2.0CategoryByIdGet */
  apiV20CategoryByIdGet(params: ApiV20CategoryByIdGetParams): Observable<__model.Kategoria> {
    const pathParams = {
      id: params.id,
    };
    return this.http.get<__model.Kategoria>(this.baseUrl +`/api/v2.0/Category/${pathParams.id}`);
  }

  /** http://undefinedundefined/swagger-ui.html#!/Category/ApiV2.0CategoryByNameGet */
  byName(params: ByNameParams): Observable<__model.Kategoria[]> {
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

    return this.http.get<__model.Kategoria[]>(this.baseUrl +`/api/v2.0/Category/byName`, {params: queryParams});
  }
}
