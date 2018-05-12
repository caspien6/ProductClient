/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {ApiKategoryByIdGetParams} from '../../../../controllers/Category';
import * as __model from '../../../../model';

export enum Actions {
  START = '[apiKategoryByIdGet] Start',
  SUCCESS = '[apiKategoryByIdGet] Success',
  ERROR = '[apiKategoryByIdGet] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ApiKategoryByIdGetParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.Kategoria) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type ApiKategoryByIdGetAction = Start | Success | Error;
