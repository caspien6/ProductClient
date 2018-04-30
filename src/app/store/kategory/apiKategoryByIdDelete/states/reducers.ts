/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as actions from './actions';

export interface ApiKategoryByIdDeleteState {
  data: void;
  loading: boolean;
  error: string;
}

export const initialApiKategoryByIdDeleteState: ApiKategoryByIdDeleteState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ApiKategoryByIdDelete';
export const getApiKategoryByIdDeleteStateSelector = createFeatureSelector<ApiKategoryByIdDeleteState>(selectorName);

export function ApiKategoryByIdDeleteReducer(
  state: ApiKategoryByIdDeleteState = initialApiKategoryByIdDeleteState,
  action: actions.ApiKategoryByIdDeleteAction): ApiKategoryByIdDeleteState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
