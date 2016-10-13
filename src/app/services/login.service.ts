import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export  class LoginService{
  token: string
  constructor (private http: Http) {}

    sendCredentials(model){
      let tokenUrl = 'http://localhost:8080/user/login';
      let headers1 = new Headers({'Content-type':"application/json"});

      return this.http.post(tokenUrl, JSON.stringify(model), {headers:headers1});
    }

    login(username, password): Observable<boolean> {
  let body = "grant_type=password&username=" + username + "&password=" + password;
  let headers1 = new Headers({'Content-type':"application/json"});
  return this.http.post('https://concepta-node-js.herokuapp.com/v1/auth', body)
      .map((response: Response) => {
        let token = response.json() && response.json().data.access_token;
        if(token){
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token  } ));
          return true;
        }else{
          return false;
        }

     });
   }
   checkLogin() {
      if(localStorage.getItem("currentUserName") != ""){
        return true;
      } else {
        return false;
      }
    }
    logout() {
      localStorage.setItem("currentUserName", "");
      alert("you just logged out.");
    }


  }
