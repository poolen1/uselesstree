import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbsRoutingModule } from './dbs-routing.module';

import { DbsComponent } from './dbs.component';
import { TeaComponent } from './tea/tea.component';


@NgModule({
  declarations: [
    DbsComponent,
    TeaComponent
  ],
  imports: [
    CommonModule,
    DbsRoutingModule
  ]
})
export class DbsModule { }
