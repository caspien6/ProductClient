/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import {of} from 'rxjs/observable/of';

import {catchError, map, switchMap} from 'rxjs/operators';
import {AuthService} from '../../../../controllers/Auth';
import * as actions from './actions';

@Injectable()
export class LoginEffects {
  @Effect()
  Login = this.storeActions.ofType<actions.Start>(actions.Actions.START).pipe(
    switchMap((action: actions.Start) => this.authService.login(action.payload)
      .pipe(
        map(result => new actions.Success(result)),
        catchError((error: HttpErrorResponse) => of(new actions.Error(error.message))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private authService: AuthService,
  ) {}
}