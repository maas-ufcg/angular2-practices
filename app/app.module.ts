import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {PrivateComponent} from './private.component';
import {LoginComponent} from './login.component';

import {AuthenticationService} from './authentication.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    PrivateComponent,
    LoginComponent
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
