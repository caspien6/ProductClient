/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {TermekService} from '../../../controllers/Termek';
import {FormsSharedModule} from '../../forms-shared.module';

import {ApiV20TermekGetEffects} from './states/effects';
import {ApiV20TermekGetReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, ApiV20TermekGetReducer),
    NgrxEffectsModule.forFeature([ApiV20TermekGetEffects]),
  ],
  providers: [
    TermekService,
  ],
})
export class ApiV20TermekGetModule {}
