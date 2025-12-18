import { Component, computed, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../auth-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
  authFailed = signal(false);
  submitAttempted = signal(false);
  hidePassword = signal(true);
  passwordInputType = computed(() => this.hidePassword()? 'password' : 'text');
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  
  login() {
    this.submitAttempted.set(true);
    if (this.loginForm.valid) {
      const emailValue = this.email?.value as string;
      const passwordValue = this.password?.value as string;
      this.authService.login(emailValue, passwordValue).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: () => {
          this.authFailed.set(true);
        }
      });
    } else {
      this.loginForm.markAsPristine();
    }
    
  }
  toggleHidePassword() {
    this.hidePassword.update(isHidden => !isHidden);
  }
}
