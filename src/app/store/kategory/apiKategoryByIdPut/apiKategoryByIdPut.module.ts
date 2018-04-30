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
import {ApiKategoryByIdPutFormService} from './apiKategoryByIdPut.service';

import {ApiKategoryByIdPutEffects} from './states/effects';
import {ApiKategoryByIdPutReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, ApiKategoryByIdPutReducer),
    NgrxEffectsModule.forFeature([ApiKategoryByIdPutEffects]),
  ],
  providers: [
    KategoryService,
    ApiKategoryByIdPutFormService,
  ],
})
export class ApiKategoryByIdPutModule {}