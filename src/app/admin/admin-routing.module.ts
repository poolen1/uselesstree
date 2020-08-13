import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent
  },
  {
    path: 'blog', component: BlogAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
