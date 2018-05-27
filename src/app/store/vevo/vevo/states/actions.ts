/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {VevoParams} from '../../../../controllers/Vevo';
import * as __model from '../../../../model';

export enum Actions {
  START = '[vevo] Start',
  SUCCESS = '[vevo] Success',
  ERROR = '[vevo] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: VevoParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.Vevo) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type VevoAction = Start | Success | Error;
