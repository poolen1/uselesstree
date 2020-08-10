import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header.component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [LoginComponent, HeaderComponent, AuthComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
