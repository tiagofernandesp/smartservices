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
require("rxjs/add/operator/map");
var ServicoService = (function () {
    function ServicoService(http) {
        this.http = http;
        console.log('Servico Service inicializado...');
    }
    ServicoService.prototype.getServicos = function () {
        return this.http.get('/servicos/servicos')
            .map(function (res) { return res.json(); });
    };
    ServicoService.prototype.addServico = function (newServico) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/servicos/servico', JSON.stringify(newServico), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ServicoService.prototype.deleteServico = function (id) {
        return this.http.delete('/servicos/servico/' + id)
            .map(function (res) { return res.json(); });
    };
    return ServicoService;
}());
ServicoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ServicoService);
exports.ServicoService = ServicoService;
//# sourceMappingURL=servico.service.js.map