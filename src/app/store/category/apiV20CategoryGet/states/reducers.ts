/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface ApiV20CategoryGetState {
  data: __model.Kategoria[];
  loading: boolean;
  error: string;
}

export const initialApiV20CategoryGetState: ApiV20CategoryGetState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ApiV20CategoryGet';
export const getApiV20CategoryGetStateSelector = createFeatureSelector<ApiV20CategoryGetState>(selectorName);

export function ApiV20CategoryGetReducer(
  state: ApiV20CategoryGetState = initialApiV20CategoryGetState,
  action: actions.ApiV20CategoryGetAction): ApiV20CategoryGetState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
