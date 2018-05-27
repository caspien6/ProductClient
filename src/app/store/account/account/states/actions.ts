/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {AccountParams} from '../../../../controllers/Account';

export enum Actions {
  START = '[account] Start',
  SUCCESS = '[account] Success',
  ERROR = '[account] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: AccountParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type AccountAction = Start | Success | Error;
