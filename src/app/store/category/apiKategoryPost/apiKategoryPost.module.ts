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
import {ApiKategoryPostFormService} from './apiKategoryPost.service';

import {ApiKategoryPostEffects} from './states/effects';
import {ApiKategoryPostReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, ApiKategoryPostReducer),
    NgrxEffectsModule.forFeature([ApiKategoryPostEffects]),
  ],
  providers: [
    CategoryService,
    ApiKategoryPostFormService,
  ],
})
export class ApiKategoryPostModule {}
