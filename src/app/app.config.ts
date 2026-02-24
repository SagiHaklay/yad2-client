import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, Router, withNavigationErrorHandler } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './auth/token-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withNavigationErrorHandler((error) => {
      const router = inject(Router);
      console.error('Navigation error occurred:', error.error);
      router.navigate(['/error']);
    })),
    provideHttpClient(withInterceptors([
      tokenInterceptor
    ]))
  ]
};
