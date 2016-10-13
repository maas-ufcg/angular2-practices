var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
export var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.sendCredentials = function (model) {
        var tokenUrl = 'http://localhost:8080/user/login';
        var headers1 = new Headers({ 'Content-type': "application/json" });
        return this.http.post(tokenUrl, JSON.stringify(model), { headers: headers1 });
    };
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var body = "grant_type=password&username=" + username + "&password=" + password;
        var headers1 = new Headers({ 'Content-type': "application/json" });
        return this.http.post('https://concepta-node-js.herokuapp.com/v1/auth', body)
            .map(function (response) {
            var token = response.json() && response.json().data.access_token;
            if (token) {
                _this.token = token;
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                return true;
            }
            else {
                return false;
            }
        });
    };
    LoginService.prototype.checkLogin = function () {
        if (localStorage.getItem("currentUserName") != "") {
            return true;
        }
        else {
            return false;
        }
    };
    LoginService.prototype.logout = function () {
        localStorage.setItem("currentUserName", "");
        alert("you just logged out.");
    };
    LoginService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], LoginService);
    return LoginService;
}());
//# sourceMappingURL=../../../../src/app/services/login.service.js.map