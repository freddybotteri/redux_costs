import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthApiService } from '../auth-api.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {

  cargando: boolean;
  subscription: Subscription = new Subscription();

  constructor( public authApiService: AuthApiService,
               public store: Store<AppState> ) { }

  ngOnInit() {
    this.store.select('ui')
        .subscribe( ui => this.cargando = ui.isLoading );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit( data: any ) {
    //this.authApiService.crearUsuario( data.nombre, data.email, data.password );
  }

}
