/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * My API
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {NameNameEmailEmailSzamlaszSzamlaParams} from '../../../../controllers/Vevo';

export enum Actions {
  START = '[nameNameEmailEmailSzamlaszSzamla] Start',
  SUCCESS = '[nameNameEmailEmailSzamlaszSzamla] Success',
  ERROR = '[nameNameEmailEmailSzamlaszSzamla] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: NameNameEmailEmailSzamlaszSzamlaParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type NameNameEmailEmailSzamlaszSzamlaAction = Start | Success | Error;
