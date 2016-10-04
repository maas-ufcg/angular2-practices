import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PrivateComponent} from './private.component';
import {LoginComponent} from './login.component';
import {WidgetsComponent} from './widgets.component';

import {AuthenticationService} from './authentication.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    PrivateComponent,
    LoginComponent,
    WidgetsComponent
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
