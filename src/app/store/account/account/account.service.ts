/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AccountService} from '../../../controllers/Account';

@Injectable()
export class AccountFormService {
  form: FormGroup;
  constructor(
    private accountService: AccountService,
  ) {
    this.form = new FormGroup({
      model: new FormGroup({
        password: new FormControl(undefined, []),
        email: new FormControl(undefined, []),
        firstName: new FormControl(undefined, []),
        lastName: new FormControl(undefined, []),
        pictureUrl: new FormControl(undefined, []),
      }, []),
    });
  }

  submit() {
    return this.accountService.account(this.form.value);
  }
}
