/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {AccountService} from '../../../controllers/Account';
import {FormsSharedModule} from '../../forms-shared.module';

import {LogoutEffects} from './states/effects';
import {LogoutReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, LogoutReducer),
    NgrxEffectsModule.forFeature([LogoutEffects]),
  ],
  providers: [
    AccountService,
  ],
})
export class LogoutModule {}
