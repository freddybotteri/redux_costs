import { Component, OnInit } from '@angular/core';
import { AuthApiService } from './auth/auth-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( public authApiService: AuthApiService ) { }


  ngOnInit() {
    this.authApiService.initAuthListener();
  }

}
