import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
  	LayoutComponent,
  	NavComponent
  ],
  exports: [
  	LayoutComponent
  ]
})
export class LayoutModule { }
