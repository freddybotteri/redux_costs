import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { ActivarLoadingAction,
         DesactivarLoadingAction } from '../shared/ui.accions';



import { map } from 'rxjs/operators';
// Environment
import {environment} from '../../environments/environment';
import Swal from 'sweetalert2';
import { User } from './user.model';
import { AppState } from '../store/app.reducer';
import { SetUserAction, UnsetUserAction } from './auth.actions';
import { Subscription,Observable,of  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private userSubscription: Subscription = new Subscription();
  private usuario: User;
  readonly environment : typeof environment = environment ; 

  constructor( private router: Router,
               private http: HttpClient,
               private store: Store<AppState>
               ) { }


  initAuthListener() {

    /*this.afAuth.authState.subscribe( (fbUser) => {

      if ( fbUser ) {

        this.userSubscription = this.http.post(environment.endpoint + `/validarLogin/validar`,{
          "usuario":  "",
          "password":  ""
        }).subscribe( (usuarioObj: any) => {

            const newUser = new User( usuarioObj );
            this.store.dispatch( new SetUserAction( newUser ) );
            this.usuario = newUser;

          });

      } else {

        this.usuario = null;
        this.userSubscription.unsubscribe();

      }

    });*/

  }




  login( email: string, password: string ) {


        this.store.dispatch( new ActivarLoadingAction()  );

        if ( this.usuario ) {
            this.store.dispatch( new DesactivarLoadingAction()  );
            this.router.navigate(['/']);
        } else {

          
          this.userSubscription = this.http.post(environment.apiendpoint + `/validarLogin/validar`,{
            "usuario":  email,
            "password":  password
          },
          //{headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
          ).subscribe( (usuarioObj: any) => {

            console.log(usuarioObj);

            
            this.store.dispatch( new DesactivarLoadingAction()  );

            const newUser = new User( usuarioObj );
            this.store.dispatch( new SetUserAction( newUser ) );
            this.usuario = newUser;

            this.router.navigate(['/']);

           },error  => {

              console.log("Error login ", error);
              this.store.dispatch( new DesactivarLoadingAction()  );
              Swal('Error en el login', error.msg, 'error');
           });
            

        }  
        

  }

  logout() {

    this.router.navigate(['/login']);
    this.usuario = null;
    this.userSubscription.unsubscribe();

    this.store.dispatch( new UnsetUserAction() );

  }


  isAuth() {

    return of(function logueado(){
       
    }).pipe(
        map(user => {
          if ( this.usuario == null ) {
            this.router.navigate(['/login']);
          }else{
            return true;
          }
        })
    );

            
  }

  getUsuario() {
    return { ...this.usuario };
  }

}
