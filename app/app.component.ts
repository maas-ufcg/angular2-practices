import { Component } from '@angular/core';
import { LoginComponent } from './components/login.component';
import { PrivateComponent } from './components/private.component';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent { }
