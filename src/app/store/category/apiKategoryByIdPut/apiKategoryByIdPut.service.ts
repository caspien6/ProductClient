/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../controllers/Category';

@Injectable()
export class ApiKategoryByIdPutFormService {
  form: FormGroup;
  constructor(
    private categoryService: CategoryService,
  ) {
    this.form = new FormGroup({
      id: new FormControl(undefined, [Validators.required]),
      value: new FormControl(undefined, []),
    });
  }

  submit() {
    return this.categoryService.apiKategoryByIdPut(this.form.value);
  }
}
