import { Component, inject, input, model, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarType } from '../navbar-type';

@Component({
  selector: 'app-modal-sidebar',
  imports: [],
  templateUrl: './modal-sidebar.html',
  styleUrl: './modal-sidebar.scss',
})
export class ModalSidebar implements OnInit {
  isOpen = model<boolean>(false);
  private route = inject(ActivatedRoute);
  navbarType = signal(NavbarType.Default);

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.navbarType.set(data['navbarType'] || NavbarType.Default);
    });
  }
  closeSidebar() {
    this.isOpen.set(false);
  }
}
