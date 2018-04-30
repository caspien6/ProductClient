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
import {KategoryService} from '../../../../controllers/Kategory';
import * as actions from './actions';

@Injectable()
export class ApiKategoryPostEffects {
  @Effect()
  ApiKategoryPost = this.storeActions.ofType<actions.Start>(actions.Actions.START).pipe(
    switchMap((action: actions.Start) => this.kategoryService.apiKategoryPost(action.payload)
      .pipe(
        map(result => new actions.Success(result)),
        catchError((error: HttpErrorResponse) => of(new actions.Error(error.message))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private kategoryService: KategoryService,
  ) {}
}
