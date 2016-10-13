import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './config/app.routing';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PrivateComponent } from './components/private.component';
import { LoginComponent } from './components/login.component';

import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
