import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng2SliderComponent } from 'ng2-slider-component/ng2-slider.component';
import { SlideAbleDirective } from 'ng2-slideable-directive/slideable.directive';
import { Ng2StyledDirective } from 'ng2-styled-directive/ng2-styled.directive';

import { AuthGuard } from "./users/auth.guard";

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { ServicosComponent } from './servicos/servicos.component';
import { FilterPipe } from './servicos/filter.pipe';
import { ServicoService } from './servicos/servico.service';

import {SignoutComponent} from './users/signout.component';
import { SigninComponent } from './users/signin.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';

import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';

import { NavbarComponent } from './navbar/navbar.component';

import { IndexComponent } from './index/index.component';

import {SobrenosComponent} from './sobrenos/sobrenos.component';

import {RegistarComponent} from './registar/registar.component';

import {EmpresasComponent} from './empresas/empresas.component';

import {FaComponent} from './fa/fa.component';


@NgModule({
  imports: [  BrowserModule , HttpModule, FormsModule, AppRoutingModule, NgbModule.forRoot()],
  declarations: [SlideAbleDirective, Ng2StyledDirective, Ng2SliderComponent,
  AppComponent, ServicosComponent,UsersComponent,SigninComponent, SignoutComponent,
   NavbarComponent ,FaComponent, EmpresasComponent ,IndexComponent ,SobrenosComponent ,
    HeaderComponent, FooterComponent, FilterPipe, RegistarComponent ],
  providers: [ ServicoService,UsersService, AuthGuard ],
  bootstrap: [ AppComponent ],
  exports: [ Ng2SliderComponent, Ng2StyledDirective ]
})
export class AppModule {}
