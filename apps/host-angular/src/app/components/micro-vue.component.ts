import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { NgxWujieComponent } from 'ngx-wujie';
import { Router } from '@angular/router';


@Component({
  selector: 'micro-vue',
  standalone: true,
  imports: [NgxWujieComponent],
  template: `
    <ngx-wujie
      [name]="'vue-subapp'"
      [url]="env.VUE_SUBAPP_URL"
      [props]="{jump}"
      [sync]="true"
      [exec]="true"
      [alive]="true"
    />
  `
})
export class MicroVueComponent {
  constructor(private readonly router: Router) { }
  env = environment;

  jump = (target: string) => {
    this.router.navigateByUrl(target);
  }
}


