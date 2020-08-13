import { Injectable } from '@angular/core';
import { LoginUser } from '../model/LoginUser';

enum AppRoles {
  SystemAdmin = "SYS_ADMIN",
  UserManager = "USER_ADMIN",
  BlogManager = "BLOG_ADMIN"
}

const LOGIN_KEY = "LoginUser";
const PASS_KEY = "Password";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  _isLoggedIn: boolean;

  _currentLoginUser: LoginUser;

  constructor() { }

  public login(username: string, password: string): boolean
  {
    let loggedIn: boolean = false;

    if (this.isLoggedIn)
    {
      loggedIn = true;
    }
    else if (username == 'admin' && password == 'Abc$1234')
    {
      sessionStorage.setItem(LOGIN_KEY, username);
      loggedIn = true;
    }

    return loggedIn;
  }

  public isLoggedIn(): boolean
  {
    let isLoggedIn: boolean;
    let username: string;
    let password: string;

    isLoggedIn = false;
    username = sessionStorage.getItem(LOGIN_KEY);

    if (username != null)
    {
      isLoggedIn = true;
    }

    return isLoggedIn;
  }

  public logout()
  {
    this._isLoggedIn = false;
    //clear user rights
    sessionStorage.clear();
  }
}
