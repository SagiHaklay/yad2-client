import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserProfile } from '../types/user-profile';
import { ProfileIcon } from '../profile-icon/profile-icon';

@Component({
  selector: 'app-profile-sidebar',
  imports: [ProfileIcon, RouterLink],
  templateUrl: './profile-sidebar.html',
  styleUrl: './profile-sidebar.scss',
})
export class ProfileSidebar {
  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data, {
    initialValue: {profile: {}}
  });
  profile = computed(() => this.data().profile as UserProfile);
}
