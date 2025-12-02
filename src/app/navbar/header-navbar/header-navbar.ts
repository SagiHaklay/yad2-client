import { Component, computed, inject, signal } from '@angular/core';
import { UserProfileService } from '../../profile/user-profile-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProfileIcon } from "../../profile/profile-icon/profile-icon";
import { FavoriteService } from '../../profile/favorites/favorite-service';

@Component({
  selector: 'app-header-navbar',
  imports: [ProfileIcon],
  providers: [],
  templateUrl: './header-navbar.html',
  styleUrl: './header-navbar.scss',
})
export class HeaderNavbar {
  private profileService = inject(UserProfileService);
  private favoriteService = inject(FavoriteService);
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
  favoriteCount = this.favoriteService.favoriteCount;
}
