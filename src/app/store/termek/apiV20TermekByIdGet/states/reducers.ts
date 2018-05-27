/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface ApiV20TermekByIdGetState {
  data: __model.Termek;
  loading: boolean;
  error: string;
}

export const initialApiV20TermekByIdGetState: ApiV20TermekByIdGetState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ApiV20TermekByIdGet';
export const getApiV20TermekByIdGetStateSelector = createFeatureSelector<ApiV20TermekByIdGetState>(selectorName);

export function ApiV20TermekByIdGetReducer(
  state: ApiV20TermekByIdGetState = initialApiV20TermekByIdGetState,
  action: actions.ApiV20TermekByIdGetAction): ApiV20TermekByIdGetState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
