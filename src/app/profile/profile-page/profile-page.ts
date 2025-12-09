import { Component } from '@angular/core';
import { ProfileSidebar } from "../profile-sidebar/profile-sidebar";
import { RouterOutlet } from '@angular/router';
import { NavbarContainer } from "../../navbar/navbar-container/navbar-container";

@Component({
  selector: 'app-profile-page',
  imports: [ProfileSidebar, RouterOutlet, NavbarContainer],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
})
export class ProfilePage {
  
}
