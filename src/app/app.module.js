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
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_slider_component_1 = require("ng2-slider-component/ng2-slider.component");
var slideable_directive_1 = require("ng2-slideable-directive/slideable.directive");
var ng2_styled_directive_1 = require("ng2-styled-directive/ng2-styled.directive");
var auth_guard_1 = require("./users/auth.guard");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var servicos_component_1 = require("./servicos/servicos.component");
var filter_pipe_1 = require("./servicos/filter.pipe");
var servico_service_1 = require("./servicos/servico.service");
var signout_component_1 = require("./users/signout.component");
var signin_component_1 = require("./users/signin.component");
var users_component_1 = require("./users/users.component");
var users_service_1 = require("./users/users.service");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var navbar_component_1 = require("./navbar/navbar.component");
var index_component_1 = require("./index/index.component");
var sobrenos_component_1 = require("./sobrenos/sobrenos.component");
var registar_component_1 = require("./registar/registar.component");
var empresas_component_1 = require("./empresas/empresas.component");
var fa_component_1 = require("./fa/fa.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, ng_bootstrap_1.NgbModule.forRoot()],
        declarations: [slideable_directive_1.SlideAbleDirective, ng2_styled_directive_1.Ng2StyledDirective, ng2_slider_component_1.Ng2SliderComponent,
            app_component_1.AppComponent, servicos_component_1.ServicosComponent, users_component_1.UsersComponent, signin_component_1.SigninComponent, signout_component_1.SignoutComponent,
            navbar_component_1.NavbarComponent, fa_component_1.FaComponent, empresas_component_1.EmpresasComponent, index_component_1.IndexComponent, sobrenos_component_1.SobrenosComponent,
            header_component_1.HeaderComponent, footer_component_1.FooterComponent, filter_pipe_1.FilterPipe, registar_component_1.RegistarComponent],
        providers: [servico_service_1.ServicoService, users_service_1.UsersService, auth_guard_1.AuthGuard],
        bootstrap: [app_component_1.AppComponent],
        exports: [ng2_slider_component_1.Ng2SliderComponent, ng2_styled_directive_1.Ng2StyledDirective]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map