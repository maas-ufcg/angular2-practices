import {Component, ElementRef} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {User} from './user';

@Component({
  selector: 'login-form',
  templateUrl: 'app/templates/login.component.html',
  styleUrls: ['app/templates/styles/login.component.css']
})

export class LoginComponent {
  public user = new User('','');
  public errorMsg = '';

  constructor(private _service: AuthenticationService){}

  login(){
    if(!this._service.login(this.user)){
      this.errorMsg = 'Incorrect Username or Password';
    }
  }
}
