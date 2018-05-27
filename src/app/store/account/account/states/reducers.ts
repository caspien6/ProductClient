/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {createFeatureSelector} from '@ngrx/store';

import * as actions from './actions';

export interface AccountState {
  data: void;
  loading: boolean;
  error: string;
}

export const initialAccountState: AccountState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Account';
export const getAccountStateSelector = createFeatureSelector<AccountState>(selectorName);

export function AccountReducer(
  state: AccountState = initialAccountState,
  action: actions.AccountAction): AccountState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
