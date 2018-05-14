/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {KosarService} from '../../../controllers/Kosar';
import {FormsSharedModule} from '../../forms-shared.module';
import {KosaridKosarIdMennyisegMennyisegFormService} from './kosaridKosarIdMennyisegMennyiseg.service';

import {KosaridKosarIdMennyisegMennyisegEffects} from './states/effects';
import {KosaridKosarIdMennyisegMennyisegReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, KosaridKosarIdMennyisegMennyisegReducer),
    NgrxEffectsModule.forFeature([KosaridKosarIdMennyisegMennyisegEffects]),
  ],
  providers: [
    KosarService,
    KosaridKosarIdMennyisegMennyisegFormService,
  ],
})
export class KosaridKosarIdMennyisegMennyisegModule {}
