/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as actions from './actions';

export interface ApiKategoryPostState {
  data: void;
  loading: boolean;
  error: string;
}

export const initialApiKategoryPostState: ApiKategoryPostState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ApiKategoryPost';
export const getApiKategoryPostStateSelector = createFeatureSelector<ApiKategoryPostState>(selectorName);

export function ApiKategoryPostReducer(
  state: ApiKategoryPostState = initialApiKategoryPostState,
  action: actions.ApiKategoryPostAction): ApiKategoryPostState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
