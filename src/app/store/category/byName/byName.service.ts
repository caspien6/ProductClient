/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../controllers/Category';

@Injectable()
export class ByNameFormService {
  form: FormGroup;
  constructor(
    private categoryService: CategoryService,
  ) {
    this.form = new FormGroup({
      name: new FormControl(undefined, []),
    });
  }

  submit() {
    return this.categoryService.byName(this.form.value);
  }
}
