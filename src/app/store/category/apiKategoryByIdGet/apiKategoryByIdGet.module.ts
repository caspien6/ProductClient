/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {CategoryService} from '../../../controllers/Category';
import {FormsSharedModule} from '../../forms-shared.module';
import {ApiKategoryByIdGetFormService} from './apiKategoryByIdGet.service';

import {ApiKategoryByIdGetEffects} from './states/effects';
import {ApiKategoryByIdGetReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, ApiKategoryByIdGetReducer),
    NgrxEffectsModule.forFeature([ApiKategoryByIdGetEffects]),
  ],
  providers: [
    CategoryService,
    ApiKategoryByIdGetFormService,
  ],
})
export class ApiKategoryByIdGetModule {}
