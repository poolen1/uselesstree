import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _authSvc: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout()
  {
    this._authSvc.logout();
  }

}
