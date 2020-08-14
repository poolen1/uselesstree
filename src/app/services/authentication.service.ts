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

  _currentLoginUser: LoginUser = new LoginUser();

  constructor() { }

  public login(username: string, password: string): boolean
  {
    let loggedIn: boolean = false;

    console.log("username:", username);
    console.log("pass: ", password);

    this._currentLoginUser.username = username;

    sessionStorage.setItem(LOGIN_KEY, this._currentLoginUser.username);
    loggedIn = true;

    loggedIn = this.isLoggedIn();

    /*
    if (loggedIn)
    {
      loggedIn = true;
      return loggedIn;
    }
    else if (this._currentLoginUser.username == 'admin' && password == 'asdf')
    {
      console.log("logging in");
      sessionStorage.setItem(LOGIN_KEY, this._currentLoginUser.username);
      loggedIn = true;
    }
    */

   if (this._currentLoginUser.username == 'admin' && password == 'asdf')
   {
     console.log("logging in");
     sessionStorage.setItem(LOGIN_KEY, this._currentLoginUser.username);
     loggedIn = true;
   }

    return loggedIn;
  }

  public isLoggedIn(): boolean
  {
    let isLoggedIn: boolean;

    isLoggedIn = false;
    this._currentLoginUser.username = sessionStorage.getItem(LOGIN_KEY);

    console.log("username: ", this._currentLoginUser.username);

    if (this._currentLoginUser.username != null)
    {
      isLoggedIn = true;
    }

    console.log("isLoggedIn: ", isLoggedIn);

    return isLoggedIn;
  }

  public logout()
  {
    this._isLoggedIn = false;
    //clear user rights
    sessionStorage.clear();
  }
}
