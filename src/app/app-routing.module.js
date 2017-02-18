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
var router_1 = require("@angular/router");
var servicos_component_1 = require("./servicos/servicos.component");
var index_component_1 = require("./index/index.component");
var sobrenos_component_1 = require("./sobrenos/sobrenos.component");
var fa_component_1 = require("./fa/fa.component");
var empresas_component_1 = require("./empresas/empresas.component");
var signin_component_1 = require("./users/signin.component");
var signout_component_1 = require("./users/signout.component");
var auth_guard_1 = require("./users/auth.guard");
var registar_component_1 = require("./registar/registar.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: index_component_1.IndexComponent },
    { path: 'servicos', component: servicos_component_1.ServicosComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'fa', component: fa_component_1.FaComponent },
    { path: 'empresas', component: empresas_component_1.EmpresasComponent },
    { path: 'sobrenos', component: sobrenos_component_1.SobrenosComponent },
    { path: 'servico/:id', component: servicos_component_1.ServicosComponent },
    { path: 'login', component: signin_component_1.SigninComponent },
    { path: 'logout', component: signout_component_1.SignoutComponent },
    { path: 'registar', component: registar_component_1.RegistarComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map