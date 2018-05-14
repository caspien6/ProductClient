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

  private baseUrl : string = "http://localhost:54920"
  constructor(private http: HttpClient) {}

  /** http://undefinedundefined/swagger-ui.html#!/Kosar/ApiKosarByVevoId={vevoIdGet */
  byVevoIdVevoId(params: ByVevoIdVevoIdParams): Observable<__model.Kosar[]> {
    const pathParams = {
      vevoId: params.vevoId,
    };
    return this.http.get<__model.Kosar[]>(this.baseUrl + `/api/Kosar/byVevoId=${pathParams.vevoId}`);
  }

  /** http://undefinedundefined/swagger-ui.html#!/Kosar/ApiKosarKosarid={kosarId}&mennyiseg={mennyisegPost */
  kosaridKosarIdMennyisegMennyiseg(params: KosaridKosarIdMennyisegMennyisegParams): Observable<void> {
    const pathParams = {
      kosarId: params.kosarId,
      mennyiseg: params.mennyiseg,
    };
    const bodyParams = params.termek;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<void>(this.baseUrl + `/api/Kosar/kosarid=${pathParams.kosarId}&mennyiseg=${pathParams.mennyiseg}`, bodyParamsWithoutUndefined);
  }
}
