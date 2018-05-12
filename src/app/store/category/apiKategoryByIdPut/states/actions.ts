/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {ApiKategoryByIdPutParams} from '../../../../controllers/Category';

export enum Actions {
  START = '[apiKategoryByIdPut] Start',
  SUCCESS = '[apiKategoryByIdPut] Success',
  ERROR = '[apiKategoryByIdPut] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ApiKategoryByIdPutParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type ApiKategoryByIdPutAction = Start | Success | Error;
