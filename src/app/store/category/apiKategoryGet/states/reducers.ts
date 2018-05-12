/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface ApiKategoryGetState {
  data: __model.Kategoria[];
  loading: boolean;
  error: string;
}

export const initialApiKategoryGetState: ApiKategoryGetState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ApiKategoryGet';
export const getApiKategoryGetStateSelector = createFeatureSelector<ApiKategoryGetState>(selectorName);

export function ApiKategoryGetReducer(
  state: ApiKategoryGetState = initialApiKategoryGetState,
  action: actions.ApiKategoryGetAction): ApiKategoryGetState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
