import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PrivateComponent} from './private.component';
import {LoginComponent} from './login.component';


const appRoutes: Routes = [
  {
    path: 'home',
    name: 'Home',
    component: PrivateComponent
  },

  {
    path: 'login',
    name: 'Login',
    component: LoginComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
