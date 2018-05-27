/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as __model from '../model';

export interface ByVevoIdVevoIdParams {
  /** format: int32 */
  vevoId: number;
}

export interface KosaridKosarIdMennyisegMennyisegParams {
  /** format: int32 */
  kosarId: number;
  termek?: __model.Termek;
  /** format: int32 */
  mennyiseg: number;
}

@Injectable()
export class KosarService {


  baseUrl =  "http://localhost:54920"

  constructor(private http: HttpClient) {}

  /** http://undefinedundefined/swagger-ui.html#!/Kosar/ApiV2.0KosarByVevoId={vevoIdGet */
  byVevoIdVevoId(params: ByVevoIdVevoIdParams): Observable<__model.Kosar[]> {
    let header = new HttpHeaders();
    header = header.set('Authorization','Bearer '+ localStorage.getItem('auth_token'));
    const pathParams = {
      vevoId: params.vevoId,
    };
    return this.http.get<__model.Kosar[]>(this.baseUrl +`/api/v2.0/Kosar/byVevoId=${pathParams.vevoId}`, {headers:header});
  }

  /** http://undefinedundefined/swagger-ui.html#!/Kosar/ApiV2.0KosarKosarid={kosarId}&mennyiseg={mennyisegPost */
  kosaridKosarIdMennyisegMennyiseg(params: KosaridKosarIdMennyisegMennyisegParams): Observable<void> {
    let header = new HttpHeaders();
    header = header.set('Authorization','Bearer '+ localStorage.getItem('auth_token'));
    const pathParams = {
      kosarId: params.kosarId,
      mennyiseg: params.mennyiseg,
    };
    const bodyParams = params.termek;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<void>(this.baseUrl +`/api/v2.0/Kosar/kosarid=${pathParams.kosarId}&mennyiseg=${pathParams.mennyiseg}`, bodyParamsWithoutUndefined,{headers:header});
  }
}
