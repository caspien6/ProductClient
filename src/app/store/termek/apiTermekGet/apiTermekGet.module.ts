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

import {ApiTermekGetEffects} from './states/effects';
import {ApiTermekGetReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, ApiTermekGetReducer),
    NgrxEffectsModule.forFeature([ApiTermekGetEffects]),
  ],
  providers: [
    TermekService,
  ],
})
export class ApiTermekGetModule {}
