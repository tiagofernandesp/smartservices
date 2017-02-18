import {Component, OnInit} from "@angular/core";
import { UsersService } from './users.service';

@Component({
   moduleId: module.id,
   template:' '
})

export class SignoutComponent {

    nome: string;
    pw: string;

    constructor(private authService: UsersService) {
      this.authService.logout();
    
}
}