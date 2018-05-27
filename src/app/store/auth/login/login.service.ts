/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../controllers/Auth';

@Injectable()
export class LoginFormService {
  form: FormGroup;
  constructor(
    private authService: AuthService,
  ) {
    this.form = new FormGroup({
      credentials: new FormGroup({
        userName: new FormControl(undefined, []),
        password: new FormControl(undefined, []),
      }, []),
    });
  }

  submit() {
    return this.authService.login(this.form.value);
  }
}
