/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {ApiKategoryByIdDeleteParams} from '../../../../controllers/Kategory';

export enum Actions {
  START = '[apiKategoryByIdDelete] Start',
  SUCCESS = '[apiKategoryByIdDelete] Success',
  ERROR = '[apiKategoryByIdDelete] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ApiKategoryByIdDeleteParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type ApiKategoryByIdDeleteAction = Start | Success | Error;
