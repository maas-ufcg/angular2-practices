import { Component } from '@angular/core';
import { LoginComponent } from './controllers/login.component';
import { PrivateComponent } from './controllers/private.component';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  precompile: [
    LoginComponent,
    PrivateComponent
  ]
})


export class AppComponent {}
