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

import {ApiV20CategoryGetEffects} from './states/effects';
import {ApiV20CategoryGetReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, ApiV20CategoryGetReducer),
    NgrxEffectsModule.forFeature([ApiV20CategoryGetEffects]),
  ],
  providers: [
    CategoryService,
  ],
})
export class ApiV20CategoryGetModule {}
