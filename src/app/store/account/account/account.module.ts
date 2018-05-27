/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {AccountService} from '../../../controllers/Account';
import {FormsSharedModule} from '../../forms-shared.module';
import {AccountFormService} from './account.service';

import {AccountEffects} from './states/effects';
import {AccountReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, AccountReducer),
    NgrxEffectsModule.forFeature([AccountEffects]),
  ],
  providers: [
    AccountService,
    AccountFormService,
  ],
})
export class AccountModule {}
