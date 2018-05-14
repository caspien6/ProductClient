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
import {ByVevoIdVevoIdFormService} from './byVevoIdVevoId.service';

import {ByVevoIdVevoIdEffects} from './states/effects';
import {ByVevoIdVevoIdReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, ByVevoIdVevoIdReducer),
    NgrxEffectsModule.forFeature([ByVevoIdVevoIdEffects]),
  ],
  providers: [
    KosarService,
    ByVevoIdVevoIdFormService,
  ],
})
export class ByVevoIdVevoIdModule {}
