/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {ApiV20CategoryByIdGetParams} from '../../../../controllers/Category';
import * as __model from '../../../../model';

export enum Actions {
  START = '[apiV20CategoryByIdGet] Start',
  SUCCESS = '[apiV20CategoryByIdGet] Success',
  ERROR = '[apiV20CategoryByIdGet] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ApiV20CategoryByIdGetParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.Kategoria) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type ApiV20CategoryByIdGetAction = Start | Success | Error;
