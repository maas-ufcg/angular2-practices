import {Component} from '@angular/core';
import {User} from '../models/user';
import {RegisterService} from '../services/register.service';

@Component({
  selector: "register",
  templateUrl: './register.component.html'
})

export class Register {
  newUser: User = new User();
  registered: boolean = false;
  constructor(private registerService: RegisterService) {

  }
  onSubmit(){
    //TO-DO
  }

}
