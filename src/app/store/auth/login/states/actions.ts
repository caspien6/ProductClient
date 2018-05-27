/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {LoginParams} from '../../../../controllers/Auth';
import * as __model from '../../../../model';

export enum Actions {
  START = '[login] Start',
  SUCCESS = '[login] Success',
  ERROR = '[login] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: LoginParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.JwtScheme) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type LoginAction = Start | Success | Error;
