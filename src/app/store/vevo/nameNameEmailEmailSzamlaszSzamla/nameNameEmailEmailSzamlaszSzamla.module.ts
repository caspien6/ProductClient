/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {VevoService} from '../../../controllers/Vevo';
import {FormsSharedModule} from '../../forms-shared.module';
import {NameNameEmailEmailSzamlaszSzamlaFormService} from './nameNameEmailEmailSzamlaszSzamla.service';

import {NameNameEmailEmailSzamlaszSzamlaEffects} from './states/effects';
import {NameNameEmailEmailSzamlaszSzamlaReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, NameNameEmailEmailSzamlaszSzamlaReducer),
    NgrxEffectsModule.forFeature([NameNameEmailEmailSzamlaszSzamlaEffects]),
  ],
  providers: [
    VevoService,
    NameNameEmailEmailSzamlaszSzamlaFormService,
  ],
})
export class NameNameEmailEmailSzamlaszSzamlaModule {}
