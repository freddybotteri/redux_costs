import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// import { AuthGuardService } from '../auth/auth-guard.service';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [
  {
        path: 'home',
        component: ListaComponent
        // canActivate: [ AuthGuardService ]

  },
  {
        path: 'usuario/:id',
        component: UsuarioComponent
        // canActivate: [ AuthGuardService ]

  },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [

    RouterModule
  ],
  declarations: []
})
export class UsuariosRoutingModule { }
