import { Component, computed, inject, signal } from '@angular/core';
import { UserProfileService } from '../../profile/user-profile-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header-navbar',
  imports: [],
  templateUrl: './header-navbar.html',
  styleUrl: './header-navbar.scss',
})
export class HeaderNavbar {
  private profileService = inject(UserProfileService);
  currentUser = toSignal(this.profileService.currentUser$, {
    initialValue: null
  });
  profileLinkText = computed(() => this.currentUser() === null? 'התחברות' : this.currentUser()?.firstName);
  userAlias = computed(() => {
    if (this.currentUser() === null) {
      return null;
    }
    return `${this.currentUser()?.firstName.at(0)}${this.currentUser()?.lastName.at(0)}`;
  });
}
