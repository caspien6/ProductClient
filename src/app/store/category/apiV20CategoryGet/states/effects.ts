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
import {CategoryService} from '../../../../controllers/Category';
import * as actions from './actions';

@Injectable()
export class ApiV20CategoryGetEffects {
  @Effect()
  ApiV20CategoryGet = this.storeActions.ofType<actions.Start>(actions.Actions.START).pipe(
    switchMap(() => this.categoryService.apiV20CategoryGet()
      .pipe(
        map(result => new actions.Success(result)),
        catchError((error: HttpErrorResponse) => of(new actions.Error(error.message))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private categoryService: CategoryService,
  ) {}
}
