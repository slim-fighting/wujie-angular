import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { NgxWujieComponent } from 'ngx-wujie';


@Component({
  selector: 'micro-react',
  standalone: true,
  imports: [NgxWujieComponent],
  template: `
    <ngx-wujie
      [name]="'react-subapp'"
      [url]="env.REACT_SUBAPP_URL"
      [props]="{ basename: '/react-subapp' }"
      [sync]="true"
      [exec]="true"
      [alive]="true"
    />
  `
})
export class MicroReactComponent {
  env = environment;
}


