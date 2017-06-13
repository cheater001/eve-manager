import { Routes } from '@angular/router';

import { DashboardComponent } from './containers/dashboard';
import { NotFoundPageComponent } from './containers/not-found-page';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
