import { Injectable } from '@angular/core';
import { startApp, destroyApp, preloadApp } from 'wujie';

@Injectable({
  providedIn: 'root'
})
export class NgxWujieService {
  
  preload(name: string, url: string): void {
    preloadApp({ name, url });
  }

  destroy(name: string): void {
    try {
      destroyApp(name);
    } catch {}
  }
}
