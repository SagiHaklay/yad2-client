import { Component } from '@angular/core';
import { ProfileSidebar } from "../profile-sidebar/profile-sidebar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  imports: [ProfileSidebar, RouterOutlet],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
})
export class ProfilePage {
  
}
