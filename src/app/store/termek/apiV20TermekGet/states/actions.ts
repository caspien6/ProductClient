/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Action} from '@ngrx/store';
import * as __model from '../../../../model';

export enum Actions {
  START = '[apiV20TermekGet] Start',
  SUCCESS = '[apiV20TermekGet] Success',
  ERROR = '[apiV20TermekGet] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor() {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.Termek[]) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type ApiV20TermekGetAction = Start | Success | Error;
