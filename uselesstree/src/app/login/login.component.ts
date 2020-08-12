import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _user: string;
  _psw: string;

  constructor(public authSvc: AuthorizationService) 
  { }

  ngOnInit(): void {
  }

  onLogin(_user, _psw)
  {
    this.authSvc.authorize(_user, _psw);
  }

}
