import { Component, computed, input } from '@angular/core';
import { UserProfile } from '../types/user-profile';

@Component({
  selector: 'app-profile-icon',
  imports: [],
  templateUrl: './profile-icon.html',
  styleUrl: './profile-icon.scss',
})
export class ProfileIcon {
  profile = input<UserProfile | null>(null);
  userAlias = computed(() => {
    if (this.profile() === null) {
      return null;
    }
    return `${this.profile()?.firstName.at(0)}${this.profile()?.lastName.at(0)}`;
  });
}
