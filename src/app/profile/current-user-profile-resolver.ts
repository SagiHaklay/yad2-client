import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth-service';
import { UserProfileService } from './user-profile-service';
import { UserProfile } from './types/user-profile';
import { of } from 'rxjs';

export const currentUserProfileResolver: ResolveFn<UserProfile> = (route, state) => {
  const authService = inject(AuthService);
  const profileService = inject(UserProfileService);
  const router = inject(Router);
  if (authService.currentUserId() === null) {
    return of(new RedirectCommand(router.parseUrl('/error')));
  }
  return profileService.getProfileById(authService.currentUserId() as number);
};
