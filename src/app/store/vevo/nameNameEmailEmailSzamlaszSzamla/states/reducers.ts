/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as actions from './actions';

export interface NameNameEmailEmailSzamlaszSzamlaState {
  data: void;
  loading: boolean;
  error: string;
}

export const initialNameNameEmailEmailSzamlaszSzamlaState: NameNameEmailEmailSzamlaszSzamlaState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'NameNameEmailEmailSzamlaszSzamla';
export const getNameNameEmailEmailSzamlaszSzamlaStateSelector = createFeatureSelector<NameNameEmailEmailSzamlaszSzamlaState>(selectorName);

export function NameNameEmailEmailSzamlaszSzamlaReducer(
  state: NameNameEmailEmailSzamlaszSzamlaState = initialNameNameEmailEmailSzamlaszSzamlaState,
  action: actions.NameNameEmailEmailSzamlaszSzamlaAction): NameNameEmailEmailSzamlaszSzamlaState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
