import {Injectable} from "@angular/core";
import{Http, Headers} from "@angular/http";
import{User} from "../models/user"
import{Observable} from "rxjs/Observable";

@Injectable()
export class RegisterService {
  constructor(private http:Http) {}

  sendUser(user: User) {
    //TO -DO
  }

}
