import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ServicosComponent} from './servicos/servicos.component';
import {IndexComponent} from './index/index.component';
import {SobrenosComponent} from './sobrenos/sobrenos.component';
import {FaComponent} from './fa/fa.component';
import {EmpresasComponent} from './empresas/empresas.component';
import {SigninComponent} from './users/signin.component';
import {SignoutComponent} from './users/signout.component';
import {AuthGuard} from './users/auth.guard';
import {RegistarComponent} from './registar/registar.component';


const appRoutes: Routes = [
  { path: '' , redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: IndexComponent },
  { path: 'servicos',  component: ServicosComponent, canActivate:[AuthGuard] },
  { path: 'fa',  component: FaComponent },
  { path: 'empresas',  component: EmpresasComponent },
  { path: 'sobrenos',  component: SobrenosComponent },
  { path: 'servico/:id', component: ServicosComponent },
  { path: 'login', component: SigninComponent },
  { path: 'logout', component: SignoutComponent },
  { path: 'registar', component: RegistarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

