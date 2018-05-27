/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {ByNameParams} from '../../../../controllers/Category';
import * as __model from '../../../../model';

export enum Actions {
  START = '[byName] Start',
  SUCCESS = '[byName] Success',
  ERROR = '[byName] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ByNameParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.Kategoria[]) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type ByNameAction = Start | Success | Error;
