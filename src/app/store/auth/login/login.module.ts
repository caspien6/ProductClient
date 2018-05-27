/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {AuthService} from '../../../controllers/Auth';
import {FormsSharedModule} from '../../forms-shared.module';
import {LoginFormService} from './login.service';

import {LoginEffects} from './states/effects';
import {LoginReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, LoginReducer),
    NgrxEffectsModule.forFeature([LoginEffects]),
  ],
  providers: [
    AuthService,
    LoginFormService,
  ],
})
export class LoginModule {}
