/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 *   "path": null
 */

import {Action} from '@ngrx/store';

export enum Actions {
  START = '[apiKategoryGet] Start',
  SUCCESS = '[apiKategoryGet] Success',
  ERROR = '[apiKategoryGet] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor() {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type ApiKategoryGetAction = Start | Success | Error;
