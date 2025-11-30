import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-navbar',
  imports: [],
  templateUrl: './header-navbar.html',
  styleUrl: './header-navbar.scss',
})
export class HeaderNavbar {
  profileLinkText = signal('התחברות');
  userAlias = signal('');
}
