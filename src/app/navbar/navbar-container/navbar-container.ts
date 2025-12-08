import { Component, signal } from '@angular/core';
import { HeaderNavbar } from '../header-navbar/header-navbar';
import { ModalSidebar } from '../modal-sidebar/modal-sidebar';

@Component({
  selector: 'app-navbar-container',
  imports: [HeaderNavbar, ModalSidebar],
  templateUrl: './navbar-container.html',
  styleUrl: './navbar-container.scss',
})
export class NavbarContainer {
  isSidebarOpen = signal(false);

  openSidebar() {
    this.isSidebarOpen.set(true);
  }
}
