"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const http_1 = require('@angular/http');
let AuthenticationService = class AuthenticationService {
    constructor(_router, http) {
        this._router = _router;
        this.http = http;
        this.tokenUrl = 'http://localhost:3000/token/index';
    }
    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['/login']);
    }
    login(user) {
        let url = this.tokenUrl + `?username=${user.email}&password=${user.password}`;
        this.http.get(url)
            .subscribe(res => {
            if (res.status == 200) {
                this.tokenData = res.json().data.token;
                if (this.tokenData) {
                    localStorage.setItem("user", user);
                    this._router.navigate(['/home']);
                    return true;
                }
            }
            else {
                console.error("Bad Request");
            }
        }, err => {
            this.handleError(err);
            return false;
        });
    }
    checkCredentials() {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['/login']);
        }
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};
AuthenticationService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map