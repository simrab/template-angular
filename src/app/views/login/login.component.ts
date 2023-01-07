import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { DynamicHostComponent } from '../../components/dynamic-host/dynamic-host.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomInputComponent,
    FontAwesomeModule,
    DynamicHostComponent,
  ],
  template: `
    <div>
      <h1>Login</h1>
      <form *ngIf="formLogin" [formGroup]="formLogin">
        <app-custom-input
          fieldName="name"
          formControlName="name"
          [type]="'text'"
          [formGroup]="formLogin"
          [isSubmitted]="isSubmitted"></app-custom-input>
        <app-custom-input
          fieldName="password"
          formControlName="password"
          [type]="isPswdVisible ? 'text' : 'password'"
          [formGroup]="formLogin"
          [isSubmitted]="isSubmitted">
          <fa-icon
            class="position-absolute top-50 end-0 translate-middle-y pe-1"
            data-test-id="togglePswdVisibility"
            (click)="togglePswdVisibility()"
            [icon]="isPswdVisible ? farEye : farEyeSlash"></fa-icon>
        </app-custom-input>
      </form>
      <button data-test-id="submitLogin" (click)="onSubmit()">Submit</button>
    </div>
    <app-dynamic-host></app-dynamic-host>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.components.scss'],
})
export class LoginComponent {
  formLogin = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  isSubmitted = false;
  isPswdVisible = false;

  farEye = faEye;
  farEyeSlash = faEyeSlash;
  constructor(private fb: FormBuilder) {}

  togglePswdVisibility() {
    this.isPswdVisible = !this.isPswdVisible;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.formLogin.valid) {
      console.log(this.formLogin.value);
    } else {
      alert(JSON.stringify(this.formLogin.errors));
    }
  }
}
