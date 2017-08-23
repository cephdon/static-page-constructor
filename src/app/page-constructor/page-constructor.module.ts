import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { PageConstructorRoutingModule } from './page-constructor-routing.module';
import { PageConstructorComponent } from './page-constructor.component';
import { PageEditComponent } from './page-edit/page-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PageConstructorRoutingModule
  ],
  declarations: [PageConstructorComponent, PageEditComponent]
})
export class PageConstructorModule { }