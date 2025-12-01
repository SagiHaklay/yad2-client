import { inject, Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { UserProfile } from './types/user-profile';
import { AuthService } from '../auth/auth-service';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private authService = inject(AuthService);
  private currentUserId$ = toObservable(this.authService.currentUserId);
  currentUser$: Observable<UserProfile | null> = this.currentUserId$.pipe(
    switchMap(userId => userId == null? of(null) : this.getProfileById(userId))
  );

  getProfileById(id: number): Observable<UserProfile> {
    return of({
      firstName: 'Sagi',
      lastName: 'Haklay',
      phone: '0544989884',
      email: 'sahaklay@gmail.com'
    });
  }
}
