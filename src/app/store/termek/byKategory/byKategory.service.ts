/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TermekService} from '../../../controllers/Termek';

@Injectable()
export class ByKategoryFormService {
  form: FormGroup;
  constructor(
    private termekService: TermekService,
  ) {
    this.form = new FormGroup({
      katid: new FormControl(undefined, []),
    });
  }

  submit() {
    return this.termekService.byKategory(this.form.value);
  }
}
