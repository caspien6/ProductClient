/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {KategoryService} from '../../../controllers/Kategory';
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
    KategoryService,
    ApiKategoryPostFormService,
  ],
})
export class ApiKategoryPostModule {}
