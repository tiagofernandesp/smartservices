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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var UsersService = (function () {
    function UsersService(http, router) {
        this.http = http;
        this.router = router;
        this.logged = false;
        console.log('User Service inicializado...');
    }
    UsersService.prototype.getUser = function (nome, pw) {
        var _this = this;
        this.http.get('/users/user/' + nome + '&' + pw)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) { return _this.currentUser = data; }, function (err) { return _this.logError = err; }, function () {
            _this.isValid();
        });
    };
    UsersService.prototype.isValid = function () {
        if (this.isAuthenticated()) {
            this.logged = true;
            this.router.navigate(['/servicos']);
        }
        else {
            this.logError = "Utilizador ou password errados!";
        }
    };
    UsersService.prototype.logout = function () {
        this.currentUser = null;
        this.logged = false;
        this.router.navigate(['/login']);
    };
    UsersService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    UsersService.prototype.isAuthenticated = function () {
        if (this.currentUser) {
            return true;
        }
        else {
            return false;
        }
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map