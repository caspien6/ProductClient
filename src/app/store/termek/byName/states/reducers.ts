/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface ByNameState {
  data: __model.Termek[];
  loading: boolean;
  error: string;
}

export const initialByNameState: ByNameState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ByName';
export const getByNameStateSelector = createFeatureSelector<ByNameState>(selectorName);

export function ByNameReducer(
  state: ByNameState = initialByNameState,
  action: actions.ByNameAction): ByNameState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
