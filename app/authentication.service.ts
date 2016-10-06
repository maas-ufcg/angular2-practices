import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {USERS} from './mock-users';
import {User} from './user';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuthenticationService {

  private tokenUrl = 'http://localhost:3000/token/index';

  private tokenData;

  constructor(
    private _router: Router,
    private http: Http,
  ){}

    logout(): void{
      localStorage.removeItem("user");
      this._router.navigate(['/login']);
    }

    login(user){
      let url = this.tokenUrl + `?username=${user.email}&password=${user.password}`;

      this.http.get(url)
      .subscribe(
        res => {
          if (res.status == 200){
            this.tokenData = res.json().data.token;

            if (this.tokenData){
              localStorage.setItem("user", user);
              this._router.navigate(['/home']);
              return true;
            }
          }else {
            console.error("Bad Request");
          }
        },
        err => {
          this.handleError(err);
          return false;
        }
      );
    }

    checkCredentials(): void{
      if (localStorage.getItem("user") === null){
        this._router.navigate(['/login']);
      }
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}
