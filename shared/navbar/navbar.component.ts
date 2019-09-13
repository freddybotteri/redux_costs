import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {

  nombre: string;
  subscription: Subscription = new Subscription();

  constructor( private store: Store<AppState> ,private router: Router ) { }

  ngOnInit() {

    this.subscription = this.store.select('auth')
        .pipe(
          filter( auth => auth.user != null )
        )
        .subscribe( auth => this.nombre = auth.user.nombre );

  }


  irUsuario( id: string ) {

    if ( !id ) {
      return;
    }

    this.router.navigate([ '/home/usuario', id ]);

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
