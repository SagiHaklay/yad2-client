import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
    firstName: [''],
    lastName: [''],
    phone: ['']
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
  finishRegister() {
    if (this.registerForm.valid && this.authService.loginInfoCache()) {
      const first = this.firstName?.value as string;
      const last = this.lastName?.value as string;
      const phoneNum = this.phone?.value as string;
      const loginInfo = this.authService.loginInfoCache() as LoginInfo;
      this.authService.register({
        ...loginInfo,
        firstName: first,
        lastName: last,
        phone: phoneNum
      });
    } else {
      this.registerForm.markAsPristine();
    }
  }
}
