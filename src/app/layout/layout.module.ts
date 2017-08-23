import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
  	LayoutComponent
  ],
  exports: [
  	LayoutComponent
  ]
})
export class LayoutModule { }
