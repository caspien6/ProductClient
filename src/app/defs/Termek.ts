/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import * as __model from '../model';

export interface Termek {
  /** format: int32 */
  id?: number;
  nev?: string;
  /** format: double */
  ar?: number;
  /** format: int32 */
  raktarkeszlet?: number;
  /** format: int32 */
  kategoriaId?: number;
  leiras?: string;
  /** format: int32 */
  views?: number;
  kepUrl?: string;
  kategoria?: __model.Kategoria;
  kosarTetel?: __model.KosarTetel[];
}
