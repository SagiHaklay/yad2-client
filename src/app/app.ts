import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavbar } from './navbar/header-navbar/header-navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderNavbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('yad2-client');
}
