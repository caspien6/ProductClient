/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import * as __model from '../model';

export interface Vevo {
  /** format: int32 */
  id?: number;
  nev?: string;
  szamlaszam?: string;
  login?: string;
  jelszo?: string;
  email?: string;
  kosar?: __model.Kosar[];
}
