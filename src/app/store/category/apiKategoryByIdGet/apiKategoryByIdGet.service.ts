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
export class ApiKategoryByIdGetFormService {
  form: FormGroup;
  constructor(
    private categoryService: CategoryService,
  ) {
    this.form = new FormGroup({
      id: new FormControl(undefined, [Validators.required]),
    });
  }

  submit() {
    return this.categoryService.apiKategoryByIdGet(this.form.value);
  }
}
