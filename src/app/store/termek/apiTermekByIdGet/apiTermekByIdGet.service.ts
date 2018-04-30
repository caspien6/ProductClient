/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TermekService} from '../../../controllers/Termek';

@Injectable()
export class ApiTermekByIdGetFormService {
  form: FormGroup;
  constructor(
    private termekService: TermekService,
  ) {
    this.form = new FormGroup({
      id: new FormControl(undefined, [Validators.required]),
    });
  }

  submit() {
    return this.termekService.apiTermekByIdGet(this.form.value);
  }
}
