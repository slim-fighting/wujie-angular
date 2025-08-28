import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { NgxWujieComponent } from 'ngx-wujie';

@Component({
  selector: 'micro-vue',
  standalone: true,
  imports: [NgxWujieComponent],
  template: `
    <wujie-angular
      [name]="'vue-subapp'"
      [url]="env.VUE_SUBAPP_URL"
    />
  `
})
export class MicroVueComponent {
  env = environment;
}


