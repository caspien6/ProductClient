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

import {ErrorEffects} from './states/effects';
import {ErrorReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, ErrorReducer),
    NgrxEffectsModule.forFeature([ErrorEffects]),
  ],
  providers: [
    TermekService,
  ],
})
export class ErrorModule {}
