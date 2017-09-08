import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { NarrowComponent } from './narrow/narrow.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [
		LayoutComponent,
		NavComponent,
		NarrowComponent,
		FooterComponent
	],
	exports: [
		LayoutComponent
	]
})
export class LayoutModule { }
