/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {KosarService} from '../../../controllers/Kosar';

@Injectable()
export class ByVevoIdVevoIdFormService {
  form: FormGroup;
  constructor(
    private kosarService: KosarService,
  ) {
    this.form = new FormGroup({
      vevoId: new FormControl(undefined, [Validators.required]),
    });
  }

  submit() {
    return this.kosarService.byVevoIdVevoId(this.form.value);
  }
}
