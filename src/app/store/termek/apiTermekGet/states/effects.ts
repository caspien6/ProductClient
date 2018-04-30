/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import {of} from 'rxjs/observable/of';

import {catchError, map, switchMap} from 'rxjs/operators';
import {TermekService} from '../../../../controllers/Termek';
import * as actions from './actions';

@Injectable()
export class ApiTermekGetEffects {
  @Effect()
  ApiTermekGet = this.storeActions.ofType<actions.Start>(actions.Actions.START).pipe(
    switchMap(() => this.termekService.apiTermekGet()
      .pipe(
        map(result => new actions.Success(result)),
        catchError((error: HttpErrorResponse) => of(new actions.Error(error.message))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private termekService: TermekService,
  ) {}
}