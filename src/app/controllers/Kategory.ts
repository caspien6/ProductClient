/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export interface ApiKategoryPostParams {
  value?: string;
}

export interface ApiKategoryByIdGetParams {
  /** format: int32 */
  id: number;
}

export interface ApiKategoryByIdPutParams {
  /** format: int32 */
  id: number;
  value?: string;
}

export interface ApiKategoryByIdDeleteParams {
  /** format: int32 */
  id: number;
}

export interface ByNameParams {
  name?: string;
}

@Injectable()
export class KategoryService {
  constructor(private http: HttpClient) {}

  /** http://undefinedundefined/swagger-ui.html#!/Kategory/ApiKategoryGet */
  apiKategoryGet(): Observable<void> {
    return this.http.get<void>(`/api/Kategory`);
  }

  /** http://undefinedundefined/swagger-ui.html#!/Kategory/ApiKategoryPost */
  apiKategoryPost(params: ApiKategoryPostParams): Observable<void> {
    const bodyParams = params.value;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<void>(`/api/Kategory`, bodyParamsWithoutUndefined);
  }

  /** http://undefinedundefined/swagger-ui.html#!/Kategory/ApiKategoryByIdGet */
  apiKategoryByIdGet(params: ApiKategoryByIdGetParams): Observable<void> {
    const pathParams = {
      id: params.id,
    };
    return this.http.get<void>(`/api/Kategory/${pathParams.id}`);
  }

  /** http://undefinedundefined/swagger-ui.html#!/Kategory/ApiKategoryByIdPut */
  apiKategoryByIdPut(params: ApiKategoryByIdPutParams): Observable<void> {
    const pathParams = {
      id: params.id,
    };
    const bodyParams = params.value;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.put<void>(`/api/Kategory/${pathParams.id}`, bodyParamsWithoutUndefined);
  }

  /** http://undefinedundefined/swagger-ui.html#!/Kategory/ApiKategoryByIdDelete */
  apiKategoryByIdDelete(params: ApiKategoryByIdDeleteParams): Observable<void> {
    const pathParams = {
      id: params.id,
    };
    return this.http.delete<void>(`/api/Kategory/${pathParams.id}`);
  }

  /** http://undefinedundefined/swagger-ui.html#!/Kategory/ApiKategoryByNameGet */
  byName(params: ByNameParams): Observable<void> {
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

    return this.http.get<void>(`/api/Kategory/byName`, {params: queryParams});
  }
}
