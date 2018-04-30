/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {TermekService} from '../../../controllers/Termek';
import {FormsSharedModule} from '../../forms-shared.module';
import {ApiTermekByIdGetFormService} from './apiTermekByIdGet.service';

import {ApiTermekByIdGetEffects} from './states/effects';
import {ApiTermekByIdGetReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, ApiTermekByIdGetReducer),
    NgrxEffectsModule.forFeature([ApiTermekByIdGetEffects]),
  ],
  providers: [
    TermekService,
    ApiTermekByIdGetFormService,
  ],
})
export class ApiTermekByIdGetModule {}
