import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthApiService } from '../../auth/auth-api.service';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IngresoEgresoService } from '../../ingreso-egreso/ingreso-egreso.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {

  nombre: string;
  subscription: Subscription = new Subscription();

  constructor( public authApiService: AuthApiService,
               public ingresoEgresoService: IngresoEgresoService,
               private store: Store<AppState> ) { }

  ngOnInit() {

    this.subscription = this.store.select('auth')
        .pipe(
          filter( auth => auth.user != null )
        )
        .subscribe( auth => this.nombre = auth.user.nombre );

  }

  logout() {
    this.authApiService.logout();
    this.ingresoEgresoService.cancelarSubscriptions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
