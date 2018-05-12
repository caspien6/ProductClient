/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as actions from './actions';

export interface ApiKategoryByIdPutState {
  data: void;
  loading: boolean;
  error: string;
}

export const initialApiKategoryByIdPutState: ApiKategoryByIdPutState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ApiKategoryByIdPut';
export const getApiKategoryByIdPutStateSelector = createFeatureSelector<ApiKategoryByIdPutState>(selectorName);

export function ApiKategoryByIdPutReducer(
  state: ApiKategoryByIdPutState = initialApiKategoryByIdPutState,
  action: actions.ApiKategoryByIdPutAction): ApiKategoryByIdPutState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
