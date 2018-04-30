/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import * as __model from '../model';

export interface Kategoria {
  /** format: int32 */
  id?: number;
  nev?: string;
  /** format: int32 */
  alkategoria?: number;
  alkategoriaNavigation?: __model.Kategoria;
  inverseAlkategoriaNavigation?: __model.Kategoria[];
  termek?: __model.Termek[];
}
