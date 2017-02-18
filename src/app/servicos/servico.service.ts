import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Servico} from '../../objects/Servico';

import 'rxjs/add/operator/map';

@Injectable()
export class ServicoService{
    constructor(private http:Http){
        console.log('Servico Service inicializado...');
    }
    getServicos(){
        return this.http.get('/servicos/servicos')
        .map(res => res.json());
    }
    
    addServico(newServico:Servico){
        var headers= new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/servicos/servico',JSON.stringify(newServico),{headers:headers})
        .map(res=> res.json());
    }

    deleteServico(id:string){
        return this.http.delete('/servicos/servico/'+id)
            .map(res => res.json());
    }
}