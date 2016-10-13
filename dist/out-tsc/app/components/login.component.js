var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
export var Login = (function () {
    function Login(loginService) {
        this.loginService = loginService;
        this.model = { 'username': '', 'password': '' };
        this.loading = false;
        this.error = '';
        this.loginOK = false;
    }
    Login.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.loginOK = true;
            }
            else {
                _this.error = 'Usuário ou senha incorretos.';
                _this.loading = false;
            }
        });
    };
    Login = __decorate([
        Component({
            selector: "login",
            templateUrl: './login.component.html'
        }), 
        __metadata('design:paramtypes', [LoginService])
    ], Login);
    return Login;
}());
//# sourceMappingURL=../../../../src/app/components/login.component.js.map