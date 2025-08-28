import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { NgxWujieComponent } from 'ngx-wujie';

@Component({
  selector: 'micro-react',
  standalone: true,
  imports: [NgxWujieComponent],
  template: `
    <wujie-angular
      [name]="'vue-subapp'"
      [url]="env.REACT_SUBAPP_URL"
    />
  `
})
export class MicroReactComponent {
  env = environment;
}


