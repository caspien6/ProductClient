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
import {ApiKategoryByIdDeleteFormService} from './apiKategoryByIdDelete.service';

import {ApiKategoryByIdDeleteEffects} from './states/effects';
import {ApiKategoryByIdDeleteReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, ApiKategoryByIdDeleteReducer),
    NgrxEffectsModule.forFeature([ApiKategoryByIdDeleteEffects]),
  ],
  providers: [
    CategoryService,
    ApiKategoryByIdDeleteFormService,
  ],
})
export class ApiKategoryByIdDeleteModule {}
