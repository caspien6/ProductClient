/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Action} from '@ngrx/store';
import {KosaridKosarIdMennyisegMennyisegParams} from '../../../../controllers/Kosar';

export enum Actions {
  START = '[kosaridKosarIdMennyisegMennyiseg] Start',
  SUCCESS = '[kosaridKosarIdMennyisegMennyiseg] Success',
  ERROR = '[kosaridKosarIdMennyisegMennyiseg] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: KosaridKosarIdMennyisegMennyisegParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type KosaridKosarIdMennyisegMennyisegAction = Start | Success | Error;
