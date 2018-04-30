/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {ByKategoryParams} from '../../../../controllers/Termek';

export enum Actions {
  START = '[byKategory] Start',
  SUCCESS = '[byKategory] Success',
  ERROR = '[byKategory] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ByKategoryParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type ByKategoryAction = Start | Success | Error;
