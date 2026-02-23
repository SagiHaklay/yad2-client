import { effect, inject, Injectable, signal } from '@angular/core';
import { Observable, of, tap, throwError } from 'rxjs';
import { LoginInfo } from './types/login-info';
import { RegisterModel } from './types/register-model';
import { LoginResponse } from './types/login-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token = signal<string | null>(null);
  private _userId = signal<number | null>(null);
  private _loginInfoCache = signal<LoginInfo| null>(null);
  private http = inject(HttpClient);
  private readonly authApiUrl = `${environment.restApiUrl}/auth`;
  currentToken = this._token.asReadonly();
  currentUserId = this._userId.asReadonly();
  loginInfoCache =  this._loginInfoCache.asReadonly();
  constructor() {
    effect(() => {
      if (this._token() !== null) {
        localStorage.setItem('token', `${this._token()}`);
      } else {
        localStorage.removeItem('token');
      }
    });
    effect(() => {
      if (this._userId() !== null) {
        localStorage.setItem('userId', `${this._userId()}`);
      } else {
        localStorage.removeItem('userId');
      }
    });
    effect(() => {
      if (this._loginInfoCache() !== null) {
        localStorage.setItem('loginInfo', JSON.stringify(this._loginInfoCache()));
      } else {
        localStorage.removeItem('loginInfo');
      }
    });
    this.loadFromLocalStorage();
  }
  private loadFromLocalStorage() {
    const loadedToken = localStorage.getItem('token');
    if (loadedToken !== null)
      this._token.set(loadedToken);
    const loadedUser = localStorage.getItem('userId');
    if (loadedUser !== null)
      this._userId.set(Number(loadedUser));
    const loginInfo = localStorage.getItem('loginInfo');
    if (loginInfo !== null)
      this._loginInfoCache.set(JSON.parse(loginInfo));
  }
  login(email: string, password: string): Observable<LoginResponse> {
    // return throwError(() => new Error('login failed'));
    // this._token.set('token');
    // this._userId.set(1);
    // return of({
    //   token: 'token',
    //   userId: 1
    // });
    return this.http.post<LoginResponse>(`${this.authApiUrl}/login`, {
      email, password
    }).pipe(tap(res => {
      this._token.set(res.token);
      this._userId.set(res.userId);
    }));
  }
  logout() {
    this._token.set(null);
    this._userId.set(null);
  }
  saveLoginInfo(email: string, password: string) {
    this._loginInfoCache.set({email, password});
  }
  register(data: RegisterModel) {

    this._loginInfoCache.set(null);
  }
}
