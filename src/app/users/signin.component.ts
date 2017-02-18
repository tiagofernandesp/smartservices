import {Component, OnInit} from "@angular/core";
import { UsersService } from './users.service';

@Component({
   moduleId: module.id,
  templateUrl: 'signin.component.html'
})

export class SigninComponent {

    nome: string;
    pw: string;

    constructor(private authService: UsersService) {}

    onSignin() {
      this.authService.getUser(this.nome,this.pw);
    }
}
