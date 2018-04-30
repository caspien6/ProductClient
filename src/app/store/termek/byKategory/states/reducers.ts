/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as actions from './actions';

export interface ByKategoryState {
  data: void;
  loading: boolean;
  error: string;
}

export const initialByKategoryState: ByKategoryState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ByKategory';
export const getByKategoryStateSelector = createFeatureSelector<ByKategoryState>(selectorName);

export function ByKategoryReducer(
  state: ByKategoryState = initialByKategoryState,
  action: actions.ByKategoryAction): ByKategoryState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
