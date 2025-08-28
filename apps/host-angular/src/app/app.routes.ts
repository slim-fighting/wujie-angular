import { Routes } from '@angular/router';
import { MicroVueComponent } from './components/micro-vue.component';
import { MicroReactComponent } from './components/micro-react.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'micro/vue' },
    { path: 'micro/vue', component: MicroVueComponent },
    { path: 'micro/react', component: MicroReactComponent }
];
