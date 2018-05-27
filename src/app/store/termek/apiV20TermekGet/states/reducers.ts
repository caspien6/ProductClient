/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface ApiV20TermekGetState {
  data: __model.Termek[];
  loading: boolean;
  error: string;
}

export const initialApiV20TermekGetState: ApiV20TermekGetState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ApiV20TermekGet';
export const getApiV20TermekGetStateSelector = createFeatureSelector<ApiV20TermekGetState>(selectorName);

export function ApiV20TermekGetReducer(
  state: ApiV20TermekGetState = initialApiV20TermekGetState,
  action: actions.ApiV20TermekGetAction): ApiV20TermekGetState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
