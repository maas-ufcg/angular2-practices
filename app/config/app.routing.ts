import { ModuleWithProviiders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateComponent } from '../controllers/private.component';
import { LoginComponent } from '../controllers/login.component';

const appRoutes: Routes =[
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
    redirectTo: '/home'
    pathMatch: 'full'
  }
]

export const routing: ModuleWithProviders = Router.Moodule.forRoot(appRoutes);
