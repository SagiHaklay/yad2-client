import { Component, computed, inject, input, model, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarType } from '../navbar-type';
import { ProfileSidebar } from '../../profile/profile-sidebar/profile-sidebar';
import { SiteNavbar } from '../site-navbar/site-navbar';

@Component({
  selector: 'app-modal-sidebar',
  imports: [ProfileSidebar, SiteNavbar],
  templateUrl: './modal-sidebar.html',
  styleUrl: './modal-sidebar.scss',
})
export class ModalSidebar implements OnInit {
  isOpen = model<boolean>(false);
  private route = inject(ActivatedRoute);
  private navbarType = signal(NavbarType.Default);
  isProfile = computed(() => this.navbarType() === NavbarType.Profile);

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.navbarType.set(data['navbarType'] || NavbarType.Default);
    });
  }
  closeSidebar() {
    this.isOpen.set(false);
  }
}
