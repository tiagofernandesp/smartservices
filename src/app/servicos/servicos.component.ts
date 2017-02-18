import { Component } from '@angular/core';
import { ServicoService } from './servico.service';
import { Servico} from '../../objects/Servico';


@Component({
    moduleId: module.id,
  selector: 'servicos',
  templateUrl: 'servicos.component.html'
})


export class ServicosComponent {
servicos: Servico[];

titulo: string;
corpo: string;
categoria:string;
subcategoria:string;
preco:number;
user:string;
fpreco:string="";
fcategoria:string="";
fsubcategoria:string="";


    constructor(private ServicoService:ServicoService){

      this.ServicoService.getServicos()
      .subscribe(servicos => {
        this.servicos=servicos;
      });
    }


      addServico(event:any){
        event.preventDefault();
        var newServico={
          _id: '',
          titulo: this.titulo,
          corpo: this.corpo,
          categoria: this.categoria,
          subcategoria: this.subcategoria,
          preco: this.preco,
          user: this.user
        }

        this.ServicoService.addServico(newServico)
        .subscribe(servico => {
            this.servicos.push(servico);
        });
      }


      deleteServico(id:string){
        var servicos= this.servicos;
        this.ServicoService.deleteServico(id).subscribe(data => {
          if(data.n ==1){
            for (var i=0; i<servicos.length;i++){
              if(servicos[i]._id == id){
                servicos.splice(i,1);
              }
            }
          }
        });
      }

      
 }
