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
import { User } from '../models/user';
import { RegisterService } from '../services/register.service';
export var Register = (function () {
    function Register(registerService) {
        this.registerService = registerService;
        this.newUser = new User();
        this.registered = false;
    }
    Register.prototype.onSubmit = function () {
    };
    Register = __decorate([
        Component({
            selector: "register",
            templateUrl: './register.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof RegisterService !== 'undefined' && RegisterService) === 'function' && _a) || Object])
    ], Register);
    return Register;
    var _a;
}());
//# sourceMappingURL=../../../../src/app/components/register.component.js.map