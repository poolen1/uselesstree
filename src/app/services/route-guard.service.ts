import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate
{
  constructor(private _router: Router, 
              private _authSvc: AuthenticationService) 
  {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean
  {
    console.log("PS: canActivate() called!");

    if (!this._authSvc.isLoggedIn()) {

      console.log("PS: canActivate: have not login!");
      this._router.navigate(["/login"]);
      return false;
    }
    return true;
  }
}
