/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
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
  kosarTetel?: __model.KosarTetel[];
}
