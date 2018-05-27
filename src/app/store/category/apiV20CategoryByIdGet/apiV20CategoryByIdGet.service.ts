/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../controllers/Category';

@Injectable()
export class ApiV20CategoryByIdGetFormService {
  form: FormGroup;
  constructor(
    private categoryService: CategoryService,
  ) {
    this.form = new FormGroup({
      id: new FormControl(undefined, [Validators.required]),
    });
  }

  submit() {
    return this.categoryService.apiV20CategoryByIdGet(this.form.value);
  }
}
