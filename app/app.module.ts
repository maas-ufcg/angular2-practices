import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormModule } from '@angular/forms';
import { routing } from './config/app.routing';

import { AppComponent } from './app.component';
import { PrivateComponent } from './controllers/private.component';
import { LoginComponent } from './controllers/login.component';

import { AuthenticationService } from './services/authentication.service';

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
  bootstrap? [AppComponent]
})


export class AppModule {}
