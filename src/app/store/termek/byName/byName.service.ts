/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TermekService} from '../../../controllers/Termek';

@Injectable()
export class ByNameFormService {
  form: FormGroup;
  constructor(
    private termekService: TermekService,
  ) {
    this.form = new FormGroup({
      name: new FormControl(undefined, []),
    });
  }

  submit() {
    return this.termekService.byName(this.form.value);
  }
}
