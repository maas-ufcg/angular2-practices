import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PrivateComponent} from './private.component';
import {LoginComponent} from './login.component';
import {WidgetsComponent} from './widgets.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: PrivateComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'widgets',
    component: WidgetsComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
