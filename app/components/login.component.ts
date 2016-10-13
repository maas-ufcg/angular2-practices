import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'login-form',
  moduleId: module.id,
  templateUrl: '../templates/login.component.html',
})
export class LoginComponent implements OnInit {
  model: any = {}
  loading = false;
  error = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.authService.logout();
  }

   login(){
     this.loading = true;

     this.authService.login(this.model.username, this.model.password).subscribe(result => {
       if(result === true){
         this.router.navigate(['/']);
       }else{
         this.error = 'Usuário ou senha incorretos';
         this.loading = false;
       }
     })
   }
}
