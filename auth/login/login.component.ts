import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthApiService } from '../auth-api.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit, OnDestroy {

  cargando: boolean;
  subscription: Subscription;

  constructor( public authApiService: AuthApiService,
               private store: Store<AppState> ) { }

  ngOnInit() {

    this.subscription = this.store.select('ui')
                        .subscribe( ui => this.cargando = ui.isLoading );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit( data: any ) {

    this.authApiService.login( data.email, data.password );

  }

}
