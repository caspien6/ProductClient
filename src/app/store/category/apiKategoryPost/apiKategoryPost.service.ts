/* tslint:disable:max-line-length */
/**
 * v1
 * My API
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../controllers/Category';

@Injectable()
export class ApiKategoryPostFormService {
  form: FormGroup;
  constructor(
    private categoryService: CategoryService,
  ) {
    this.form = new FormGroup({
      value: new FormControl(undefined, []),
    });
  }

  submit() {
    return this.categoryService.apiKategoryPost(this.form.value);
  }
}
