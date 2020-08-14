import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _authSvc: AuthenticationService) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean
  {
    let loggedIn: boolean;

    loggedIn = this._authSvc.isLoggedIn();

    return loggedIn;
  }

}
