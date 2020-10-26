import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-llenar',
  templateUrl: './llenar.component.html',
  styleUrls: ['./llenar.component.scss']
})
export class LlenarComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {}

  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
