import { effect, Injectable, signal } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token = signal<string | null>(null);
  private _userId = signal<number | null>(null);
  currentToken = this._token.asReadonly();
  currentUserId = this._userId.asReadonly();
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
    this.loadFromLocalStorage();
  }
  private loadFromLocalStorage() {
    const loadedToken = localStorage.getItem('token');
    if (loadedToken !== null)
      this._token.set(loadedToken);
    const loadedUser = localStorage.getItem('userId');
    if (loadedUser !== null)
      this._userId.set(Number(loadedUser));
  }
  login(email: string, password: string) {
    this._token.set('token');
    this._userId.set(1);
    return of({
      token: 'token',
      userId: 1
    });
  }
  logout() {
    this._token.set(null);
    this._userId.set(null);
  }
}
