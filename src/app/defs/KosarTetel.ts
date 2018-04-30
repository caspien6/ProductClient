/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import * as __model from '../model';

export interface KosarTetel {
  /** format: int32 */
  id?: number;
  /** format: int32 */
  mennyiseg?: number;
  /** format: double */
  ar?: number;
  /** format: int32 */
  kosarId?: number;
  /** format: int32 */
  termekId?: number;
  /** format: int32 */
  statuszId?: number;
  kosar?: __model.Kosar;
  statusz?: __model.Statusz;
  termek?: __model.Termek;
}
