import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthApiGuardService } from './auth/auth-api-guard.service';

//===================


const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    {
        path: '',
        loadChildren: './ingreso-egreso/ingreso-egreso.module#IngresoEgresoModule',
        canLoad: [ AuthApiGuardService ],
        
    },
    { path: '**', redirectTo: '' }

    //===================
    

];


@NgModule({

    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {}
