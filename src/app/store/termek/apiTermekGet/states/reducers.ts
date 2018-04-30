/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface ApiTermekGetState {
  data: __model.Termek[];
  loading: boolean;
  error: string;
}

export const initialApiTermekGetState: ApiTermekGetState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ApiTermekGet';
export const getApiTermekGetStateSelector = createFeatureSelector<ApiTermekGetState>(selectorName);

export function ApiTermekGetReducer(
  state: ApiTermekGetState = initialApiTermekGetState,
  action: actions.ApiTermekGetAction): ApiTermekGetState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
