import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: Http, private router: Router){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username, password): Observable<boolean>{
    let body = "grant_type=password&username=" + username + "&password=" + password;

    return this.http.post('https://concepta-node-js.herokuapp.com/v1/auth', body).map((response: Response) => {
      let token = response.json() && response.json().data.access_token;

      if(token){
        this.token = token;

        localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));

        return true;
      }else{
        return false;
      }

    })

  }

  logout(): void{
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  checkCredentials(){
    if(localStorage.getItem('currentUser') === null || this.token === null){
      this.router.navigate(['/login']);
    }
  }
}
