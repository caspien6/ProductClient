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
import {ByKategoryFormService} from './byKategory.service';

import {ByKategoryEffects} from './states/effects';
import {ByKategoryReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, ByKategoryReducer),
    NgrxEffectsModule.forFeature([ByKategoryEffects]),
  ],
  providers: [
    TermekService,
    ByKategoryFormService,
  ],
})
export class ByKategoryModule {}
