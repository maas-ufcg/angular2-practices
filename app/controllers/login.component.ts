import {Component, ElementRef } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'login-form',
  templateUrl: 'app/templates/login.component.html'
})

export class LoginComponent{
  public user = new User('','');
  public errorMsg = '';

  constructor(private authService: AuthenticationService){}

  login(){
    if(!this.authService.login(this.user)){
      this.errorMsg = 'Failed to Login';
    }
  }

}
