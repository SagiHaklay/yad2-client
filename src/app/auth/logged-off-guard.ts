import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';

export const loggedOffGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.currentToken() !== null) {
    const redirectUrl = route.queryParamMap.get('continue');
    if (redirectUrl != null) {
      return router.parseUrl(redirectUrl);
    }
    return router.createUrlTree(['/']);
  }
  return true;
};
