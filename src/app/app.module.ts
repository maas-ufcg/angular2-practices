import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home.component'
import {NavBar} from './components/nav-bar.component'
import {Register} from './components/register.component';
import {RegisterService} from './services/register.service';
import {Login} from './components/login.component';
import {LoginService} from './services/login.service';
import {HardwareOverview} from './components/hardware-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBar,
    Register,
    Login,
    HardwareOverview
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RegisterService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
