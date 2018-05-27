/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {VevoService} from '../../../controllers/Vevo';
import {FormsSharedModule} from '../../forms-shared.module';
import {VevoFormService} from './vevo.service';

import {VevoEffects} from './states/effects';
import {VevoReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, VevoReducer),
    NgrxEffectsModule.forFeature([VevoEffects]),
  ],
  providers: [
    VevoService,
    VevoFormService,
  ],
})
export class VevoModule {}
