import { Component, inject } from '@angular/core';
import { UserProfileService } from '../../profile/user-profile-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProfileIcon } from '../../profile/profile-icon/profile-icon';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-site-navbar',
  imports: [ProfileIcon, RouterLink],
  templateUrl: './site-navbar.html',
  styleUrl: './site-navbar.scss',
})
export class SiteNavbar {
  private profileService = inject(UserProfileService);
  private authService = inject(AuthService);
  currentUser = toSignal(this.profileService.currentUser$, {
    initialValue: null
  });
  logout() {
    this.authService.logout();
  }
}
