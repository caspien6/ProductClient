/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VevoService} from '../../../controllers/Vevo';

@Injectable()
export class VevoFormService {
  form: FormGroup;
  constructor(
    private vevoService: VevoService,
  ) {
    this.form = new FormGroup({
      name: new FormControl(undefined, [Validators.required]),
    });
  }

  submit() {
    return this.vevoService.vevo(this.form.value);
  }
}
