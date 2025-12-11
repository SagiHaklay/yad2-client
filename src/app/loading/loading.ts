import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
})
export class Loading {
  private router = inject(Router);
  readonly isLoading = toSignal(this.router.events.pipe(map((event) => {
    if (event instanceof NavigationStart) {
      return true;
    }
    if (event instanceof NavigationEnd) {
      return false;
    }
    return !!this.router.currentNavigation();
  })), {
    initialValue: false
  });
}
