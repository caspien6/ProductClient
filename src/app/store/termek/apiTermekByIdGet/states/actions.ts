/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {ApiTermekByIdGetParams} from '../../../../controllers/Termek';
import * as __model from '../../../../model';

export enum Actions {
  START = '[apiTermekByIdGet] Start',
  SUCCESS = '[apiTermekByIdGet] Success',
  ERROR = '[apiTermekByIdGet] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ApiTermekByIdGetParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.Termek) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type ApiTermekByIdGetAction = Start | Success | Error;
