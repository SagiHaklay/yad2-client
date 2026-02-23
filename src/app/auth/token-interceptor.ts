import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth-service';
import { tap } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.currentToken();
  if (token) {
    const newReq = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${token}`)
    });
    return next(newReq).pipe(tap(e => {
      if (e.type === HttpEventType.Response && e.status === 401) {
        console.error('Unauthorized!');
        authService.logout();
      }
    }));
  }
  return next(req);
};
