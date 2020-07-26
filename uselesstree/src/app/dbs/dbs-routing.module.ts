import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbsComponent } from './dbs.component';
import { TeaComponent } from './tea/tea.component';

const routes: Routes = [
  {
    path: '', component: DbsComponent
  },
  {
    path: 'tea', component: TeaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DbsRoutingModule { }
