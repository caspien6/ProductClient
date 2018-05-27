/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TermekService} from '../../../controllers/Termek';

@Injectable()
export class ApiV20TermekByIdGetFormService {
  form: FormGroup;
  constructor(
    private termekService: TermekService,
  ) {
    this.form = new FormGroup({
      id: new FormControl(undefined, [Validators.required]),
    });
  }

  submit() {
    return this.termekService.apiV20TermekByIdGet(this.form.value);
  }
}
