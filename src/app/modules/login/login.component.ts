import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: [''],
    });
  }

  get name() {
    return this.form.get('name');
  }

  login() {
    console.log('Submitted ', this.form);
  }
}
