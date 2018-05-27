/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface ByKategoryState {
  data: __model.Termek[];
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
