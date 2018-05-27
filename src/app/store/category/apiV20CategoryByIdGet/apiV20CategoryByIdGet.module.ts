/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {CategoryService} from '../../../controllers/Category';
import {FormsSharedModule} from '../../forms-shared.module';
import {ApiV20CategoryByIdGetFormService} from './apiV20CategoryByIdGet.service';

import {ApiV20CategoryByIdGetEffects} from './states/effects';
import {ApiV20CategoryByIdGetReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, ApiV20CategoryByIdGetReducer),
    NgrxEffectsModule.forFeature([ApiV20CategoryByIdGetEffects]),
  ],
  providers: [
    CategoryService,
    ApiV20CategoryByIdGetFormService,
  ],
})
export class ApiV20CategoryByIdGetModule {}
