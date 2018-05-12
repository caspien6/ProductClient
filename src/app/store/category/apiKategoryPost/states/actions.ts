/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {ApiKategoryPostParams} from '../../../../controllers/Category';

export enum Actions {
  START = '[apiKategoryPost] Start',
  SUCCESS = '[apiKategoryPost] Success',
  ERROR = '[apiKategoryPost] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ApiKategoryPostParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type ApiKategoryPostAction = Start | Success | Error;
