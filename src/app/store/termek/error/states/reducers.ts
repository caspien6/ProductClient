/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as actions from './actions';

export interface ErrorState {
  data: void;
  loading: boolean;
  error: string;
}

export const initialErrorState: ErrorState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Error';
export const getErrorStateSelector = createFeatureSelector<ErrorState>(selectorName);

export function ErrorReducer(
  state: ErrorState = initialErrorState,
  action: actions.ErrorAction): ErrorState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
