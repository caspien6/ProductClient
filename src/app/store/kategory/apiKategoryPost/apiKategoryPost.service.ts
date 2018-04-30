/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {KategoryService} from '../../../controllers/Kategory';

@Injectable()
export class ApiKategoryPostFormService {
  form: FormGroup;
  constructor(
    private kategoryService: KategoryService,
  ) {
    this.form = new FormGroup({
      value: new FormControl(undefined, []),
    });
  }

  submit() {
    return this.kategoryService.apiKategoryPost(this.form.value);
  }
}
