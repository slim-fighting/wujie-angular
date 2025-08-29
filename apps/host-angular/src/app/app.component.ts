import { Component } from '@angular/core';
import { preloadApp } from 'wujie';
import { environment } from '../environments/environment';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wujie-angular';

  // constructor() {
  //   // Preload and pre-exec both subapps at host startup
  //   try {
  //     preloadApp({ name: 'vue-subapp', url: environment.VUE_SUBAPP_URL, exec: true });
  //     console.log("preload vue");

  //   } catch { }
  //   try {
  //     preloadApp({ name: 'react-subapp', url: environment.REACT_SUBAPP_URL, exec: true });
  //     console.log("preload react");

  //   } catch { }
  // }
}
