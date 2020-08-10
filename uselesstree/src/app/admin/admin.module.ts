import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    BlogAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
