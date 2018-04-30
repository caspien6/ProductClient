/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {KategoryService} from '../../../controllers/Kategory';

@Injectable()
export class ApiKategoryByIdGetFormService {
  form: FormGroup;
  constructor(
    private kategoryService: KategoryService,
  ) {
    this.form = new FormGroup({
      id: new FormControl(undefined, [Validators.required]),
    });
  }

  submit() {
    return this.kategoryService.apiKategoryByIdGet(this.form.value);
  }
}
