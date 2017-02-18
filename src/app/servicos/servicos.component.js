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
var servico_service_1 = require("./servico.service");
var ServicosComponent = (function () {
    function ServicosComponent(ServicoService) {
        var _this = this;
        this.ServicoService = ServicoService;
        this.fpreco = "";
        this.fcategoria = "";
        this.fsubcategoria = "";
        this.ServicoService.getServicos()
            .subscribe(function (servicos) {
            _this.servicos = servicos;
        });
    }
    ServicosComponent.prototype.addServico = function (event) {
        var _this = this;
        event.preventDefault();
        var newServico = {
            _id: '',
            titulo: this.titulo,
            corpo: this.corpo,
            categoria: this.categoria,
            subcategoria: this.subcategoria,
            preco: this.preco,
            user: this.user
        };
        this.ServicoService.addServico(newServico)
            .subscribe(function (servico) {
            _this.servicos.push(servico);
        });
    };
    ServicosComponent.prototype.deleteServico = function (id) {
        var servicos = this.servicos;
        this.ServicoService.deleteServico(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < servicos.length; i++) {
                    if (servicos[i]._id == id) {
                        servicos.splice(i, 1);
                    }
                }
            }
        });
    };
    return ServicosComponent;
}());
ServicosComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'servicos',
        templateUrl: 'servicos.component.html'
    }),
    __metadata("design:paramtypes", [servico_service_1.ServicoService])
], ServicosComponent);
exports.ServicosComponent = ServicosComponent;
//# sourceMappingURL=servicos.component.js.map