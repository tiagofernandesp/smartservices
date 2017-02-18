import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {User} from '../../objects/User';
import { Router } from "@angular/router";

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{
  currentUser: User[];
  logged:boolean=false;
  logError:any;
  constructor(private http:Http, private router: Router){
    console.log('User Service inicializado...');
  }

  getUser(nome:string,pw:string){

    this.http.get('/users/user/'+nome+'&'+pw)
    .map(response => response.json())
    .subscribe(
      data => this.currentUser = data,
      err => this.logError=err,
      () => {
      this.isValid();
      }
    );
  }
  isValid(){
    if(this.isAuthenticated()){
      this.logged=true;
      this.router.navigate(['/servicos']);
    }else{
      this.logError="Utilizador ou password errados!"
    }
    
  }
  logout(){
    this.currentUser=null;
    this.logged=false;
    this.router.navigate(['/login']);
  }


  getCurrentUser(){
    return this.currentUser;
  }

  isAuthenticated() {
    if (this.currentUser) {
      return true;
    } else {
      return false;
    }
  }
}