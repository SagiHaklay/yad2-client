import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-register-form',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
})
export class RegisterForm {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: this.fb.group({
      mainPassword: ['', [Validators.required, this.passwordValidator]],
      confirmPassword: ['']
    }, {
      validators: [this.passwordConfirmedValidator]
    })
  });
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get mainPassword() {
    return this.password?.get('mainPassword');
  }
  get confirmPassword() {
    return this.password?.get('confirmPassword');
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value as string;
    if (!/[A-Za-z]+/.test(password) || !/\d+/.test(password)) {
      return {
        contentError: true
      };
    }
    if (password.length < 8 || password.length > 20) {
      return {
        lengthError: true
      };
    }
    return null;
  }
  passwordConfirmedValidator(control: AbstractControl): ValidationErrors | null {
    const mainPassword = control.get('mainPassword')?.value as string;
    const confirmed = control.get('confirmPassword')?.value as string;
    if (mainPassword !== confirmed) {
      return {
        confirmError: true
      };
    }
    return null;
  }
  continueRegister() {
    if (this.registerForm.valid) {
      const emailValue = this.email?.value as string;
      const passwordValue = this.mainPassword?.value as string;
      this.authService.saveLoginInfo(emailValue, passwordValue);
      this.router.navigate(['/auth', 'register', 'step2']);
    } else {
      this.registerForm.markAsPristine();
    }
  }
}
