/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface ByVevoIdVevoIdState {
  data: __model.Kosar[];
  loading: boolean;
  error: string;
}

export const initialByVevoIdVevoIdState: ByVevoIdVevoIdState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ByVevoIdVevoId';
export const getByVevoIdVevoIdStateSelector = createFeatureSelector<ByVevoIdVevoIdState>(selectorName);

export function ByVevoIdVevoIdReducer(
  state: ByVevoIdVevoIdState = initialByVevoIdVevoIdState,
  action: actions.ByVevoIdVevoIdAction): ByVevoIdVevoIdState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
