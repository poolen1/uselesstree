import { Injectable } from '@angular/core';
import { LoginUser } from '../model/LoginUser';

enum AppRoles {
  SystemAdmin = "SYS_ADMIN",
  UserManager = "USER_ADMIN",
  BlogManager = "BLOG_ADMIN"
}

const LOGIN_KEY = "LoginUser";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  _isLoggedIn: boolean;

  _currentLoginUser: LoginUser;

  constructor() { }

  public login(username: string, password: string): boolean
  {
    let authorized: boolean = false;

    if (username == 'admin' && password == 'Abc$1234')
    {
      authorized = true;
    }

    return authorized;
  }

  public isLoggedIn()
  {

  }

  public logout()
  {
    this._isLoggedIn = false;
    //clear user rights
    sessionStorage.clear();
  }
}
