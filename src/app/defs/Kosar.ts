/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import * as __model from '../model';

export interface Kosar {
  /** format: int32 */
  id?: number;
  /** format: date-time */
  datum?: string;
  /** format: int32 */
  telephelyId?: number;
  /** format: int32 */
  vevoId?: number;
  /** format: int32 */
  statuszId?: number;
  statusz?: __model.Statusz;
  vevo?: __model.Vevo;
  kosarTetel?: __model.KosarTetel[];
}
