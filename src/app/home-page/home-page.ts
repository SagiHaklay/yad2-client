import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { NavbarContainer } from "../navbar/navbar-container/navbar-container";

@Component({
  selector: 'app-home-page',
  imports: [Footer, NavbarContainer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
