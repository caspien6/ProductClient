/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import * as __model from '../model';

export interface Statusz {
  /** format: int32 */
  id?: number;
  nev?: string;
  kosar?: __model.Kosar[];
  kosarTetel?: __model.KosarTetel[];
}
