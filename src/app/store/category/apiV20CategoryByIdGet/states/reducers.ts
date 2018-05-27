/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface ApiV20CategoryByIdGetState {
  data: __model.Kategoria;
  loading: boolean;
  error: string;
}

export const initialApiV20CategoryByIdGetState: ApiV20CategoryByIdGetState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ApiV20CategoryByIdGet';
export const getApiV20CategoryByIdGetStateSelector = createFeatureSelector<ApiV20CategoryByIdGetState>(selectorName);

export function ApiV20CategoryByIdGetReducer(
  state: ApiV20CategoryByIdGetState = initialApiV20CategoryByIdGetState,
  action: actions.ApiV20CategoryByIdGetAction): ApiV20CategoryByIdGetState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
