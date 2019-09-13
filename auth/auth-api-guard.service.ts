import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthApiService } from './auth-api.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthApiGuardService implements CanActivate, CanLoad {

  constructor( public authApiService: AuthApiService ) { }

  canActivate() {
    return this.authApiService.isAuth();
  }


  canLoad() {
    return this.authApiService.isAuth()
              .pipe(
                take(1)
              );
  }


}
