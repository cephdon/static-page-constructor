import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
  	LayoutComponent
  ],
  exports: [
  	LayoutComponent
  ]
})
export class LayoutModule { }
