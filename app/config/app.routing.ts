import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateComponent } from '../controllers/private.component';
import { LoginComponent } from '../controllers/login.component';

const appRoutes: Routes =[
  {
    path: 'home',
    component: PrivateComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
