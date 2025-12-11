import { Component, computed, inject, output, signal } from '@angular/core';
import { UserProfileService } from '../../profile/user-profile-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProfileIcon } from "../../profile/profile-icon/profile-icon";
import { FavoriteService } from '../../profile/favorites/favorite-service';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { AuthService } from '../../auth/auth-service';
import { of, switchMap } from 'rxjs';
import { NavbarType } from '../navbar-type';

@Component({
  selector: 'app-header-navbar',
  imports: [ProfileIcon, RouterLink],
  providers: [],
  templateUrl: './header-navbar.html',
  styleUrl: './header-navbar.scss',
})
export class HeaderNavbar {
  private profileService = inject(UserProfileService);
  private favoriteService = inject(FavoriteService);
  private authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data, {
    initialValue: {navbarType: NavbarType.Default}
  });
  isProfileNavbar = computed(() => this.data().navbarType === NavbarType.Profile);
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
  sidebarOpened = output();
  private favorites$ = this.profileService.currentUser$.pipe(switchMap((user) => {
    if (user) {
      return this.favoriteService.getFavorites(this.authService.currentUserId() as number);
    }
    return of([]);
  }));
  favorites = toSignal(this.favorites$, {
    initialValue: []
  });
  openSidebar() {
    this.sidebarOpened.emit();
  }
  logout() {
    this.authService.logout();
  }
}
