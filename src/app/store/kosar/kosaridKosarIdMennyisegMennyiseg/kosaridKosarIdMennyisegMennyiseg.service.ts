/* tslint:disable:max-line-length */
/**
 * v2.0
 * My API V2.0
 *   "path": null
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {KosarService} from '../../../controllers/Kosar';

@Injectable()
export class KosaridKosarIdMennyisegMennyisegFormService {
  form: FormGroup;
  constructor(
    private kosarService: KosarService,
  ) {
    this.form = new FormGroup({
      kosarId: new FormControl(undefined, [Validators.required]),
      mennyiseg: new FormControl(undefined, [Validators.required]),
      termek: new FormGroup({
        id: new FormControl(undefined, []),
        nev: new FormControl(undefined, []),
        ar: new FormControl(undefined, []),
        raktarkeszlet: new FormControl(undefined, []),
        kategoriaId: new FormControl(undefined, []),
        leiras: new FormControl(undefined, []),
        views: new FormControl(undefined, []),
        kepUrl: new FormControl(undefined, []),
      }, []),
    });
  }

  submit() {
    return this.kosarService.kosaridKosarIdMennyisegMennyiseg(this.form.value);
  }
}
