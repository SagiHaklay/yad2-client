import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../types/user-profile';

@Component({
  selector: 'app-edit-profile-form',
  imports: [],
  templateUrl: './edit-profile-form.html',
  styleUrl: './edit-profile-form.scss',
})
export class EditProfileForm {
  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data, {
    initialValue: {profile: {}}
  });
  private profile = computed(() => this.data().profile as UserProfile);
}
