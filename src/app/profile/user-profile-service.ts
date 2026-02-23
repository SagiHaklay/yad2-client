import { inject, Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { UserProfile } from './types/user-profile';
import { AuthService } from '../auth/auth-service';
import { toObservable } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private authService = inject(AuthService);
  private http = inject(HttpClient);
  private currentUserId$ = toObservable(this.authService.currentUserId);
  private readonly profileApiUrl = `${environment.restApiUrl}/profile`;
  currentUser$: Observable<UserProfile | null> = this.currentUserId$.pipe(
    switchMap(userId => userId == null? of(null) : this.getProfileById(userId))
  );

  getProfileById(id: number): Observable<UserProfile> {
    // return of({
    //   firstName: 'Sagi',
    //   lastName: 'Haklay',
    //   phone: '0544989884',
    //   email: 'sahaklay@gmail.com'
    // });
    return this.http.get<UserProfile>(`${this.profileApiUrl}/${id}`);
  }
}
