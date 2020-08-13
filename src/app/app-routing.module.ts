import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  { 
    path: "dbs", 
    loadChildren: () => import("./dbs/dbs.module").then((m) => m.DbsModule) 
  },
  {
    path: "blog", 
    loadChildren: () => import("./blog/blog.module").then((m) => m.BlogModule) 
  },
  {
    path: "admin", 
    canActivate: [RouteGuardService],
    loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule) 
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then((m) => m.LoginModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
