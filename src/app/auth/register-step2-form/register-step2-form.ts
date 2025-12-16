import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../auth-service';
import { LoginInfo } from '../types/login-info';

@Component({
  selector: 'app-register-step2-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-step2-form.html',
  styleUrl: './register-step2-form.scss',
})
export class RegisterStep2Form {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^05\d{8}$/)]],
    terms: [false, [Validators.requiredTrue]],
    allowAds: [false]
  });
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get readTerms() {
    return this.registerForm.get('terms');
  }
  get allowAds() {
    return this.registerForm.get('allowAds');
  }
  
  finishRegister() {
    if (this.registerForm.valid && this.authService.loginInfoCache()) {
      const firstName = this.firstName?.value as string;
      const lastName = this.lastName?.value as string;
      const phone = this.phone?.value as string;
      const allowAds = this.allowAds?.value as boolean;
      const loginInfo = this.authService.loginInfoCache() as LoginInfo;
      this.authService.register({
        ...loginInfo,
        firstName, lastName, phone, allowAds
      });
    } else {
      this.registerForm.markAsPristine();
    }
  }
}
