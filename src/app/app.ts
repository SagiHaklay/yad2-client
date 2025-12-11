import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderNavbar } from './navbar/header-navbar/header-navbar';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavbarType } from './navbar/navbar-type';
import { NavbarContainer } from './navbar/navbar-container/navbar-container';
import { Loading } from "./loading/loading";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loading],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('yad2-client');
  // private route = inject(ActivatedRoute);
  // private data = toSignal(this.route.data, {
  //   initialValue: {navbarType: NavbarType.None}
  // });
  // showHeader = computed(() => this.data().navbarType != undefined && this.data().navbarType !== NavbarType.None);
}
