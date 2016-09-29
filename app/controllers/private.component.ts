import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'private-component',
  templateUrl: 'app/template/private.component'
})

export class PrivateComponent{
  constructor(private authService: AuthenticationService){}

  ngOnInit(){
    this.authService.checkCredentials();
  }

  logout(){
    this.authService.logout();
  }

}
