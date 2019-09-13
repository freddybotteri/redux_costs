import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsuariosRoutingModule } from '../usuarios/usuarios-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  declarations: [
    ListaComponent,
    UsuarioComponent

  ],
  //exports: [
    //ListaComponent,
    //UsuarioComponent
  //]
})
export class UsuariosModule { }
