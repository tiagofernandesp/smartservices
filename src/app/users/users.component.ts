import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { User} from '../../objects/User';

@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'users.component.html'
})


export class UsersComponent {
  user: User;

  nome: string;
  pw: string;
  tipo:string;

  constructor(private UsersService:UsersService){  }

}

