/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {ByVevoIdVevoIdParams} from '../../../../controllers/Kosar';
import * as __model from '../../../../model';

export enum Actions {
  START = '[byVevoIdVevoId] Start',
  SUCCESS = '[byVevoIdVevoId] Success',
  ERROR = '[byVevoIdVevoId] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ByVevoIdVevoIdParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.Kosar[]) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type ByVevoIdVevoIdAction = Start | Success | Error;
