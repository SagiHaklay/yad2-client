import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [],
  templateUrl: './not-found-page.html',
  styleUrl: './not-found-page.scss',
})
export class NotFoundPage {
  private router = inject(Router);
  goToHomePage() {
    this.router.navigate(['/']);
  }
}
