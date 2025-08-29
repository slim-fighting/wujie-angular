import { ApplicationConfig, APP_INITIALIZER, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { preloadApp } from 'wujie';
import { environment } from '../environments/environment';

import { routes } from './app.routes';

function preloadMicroApps() {
  return () => {
    try { preloadApp({ name: 'vue-subapp', url: environment.VUE_SUBAPP_URL, exec: true }); } catch { }
    try { preloadApp({ name: 'react-subapp', url: environment.REACT_SUBAPP_URL, exec: true }); } catch { }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: APP_INITIALIZER, useFactory: preloadMicroApps, multi: true },
  ]
};
