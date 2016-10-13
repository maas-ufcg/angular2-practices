import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home.component';
import {Register} from './components/register.component';
import {Login} from './components/login.component';
import {HardwareOverview} from './components/hardware-overview.component';

const appRoutes: Routes = [
  {path:'',
  redirectTo:'/home',
  pathMatch: 'full'},
  {path:'home',
  component: HomeComponent
  },
  {path:'register',
  component: Register},
  {path:'login',
  component: Login},
  {path:'hardware-component',
  component: HardwareOverview }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
