import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../services/login.service'

@Component({
  selector: "login",
  templateUrl: './login.component.html'
})

export class Login {
  private model = {'username':'', 'password':''};
  private currentUserName;
  loading = false;
  error = '';
  loginOK = false;
  constructor(private loginService: LoginService){}

  onSubmit(){
        this.loading = true;
        this.loginService.login(this.model.username, this.model.password)
          .subscribe(result =>{
            if(result === true){
              this.loginOK = true;
            }else{
              this.error = 'Usuário ou senha incorretos.'
              this.loading = false;
            }

          });


    }
  }
