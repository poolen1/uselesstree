import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _navHomeRoute: string = "/admin";

  _user: string;
  _psw: string;

  constructor(public authSvc: AuthenticationService,
              public _router: Router) 
  { }

  ngOnInit(): void {
  }

  onLogin()
  {
    if(this.authSvc.login(this._user, this._psw))
    {
      this._router.navigate([this._navHomeRoute]);
    }
  }

}
