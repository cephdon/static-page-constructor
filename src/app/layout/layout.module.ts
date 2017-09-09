import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { NarrowComponent } from './narrow/narrow.component';
import { FooterComponent } from './footer/footer.component';
import { ActiveMenuComponent } from './nav/active-menu/active-menu.component';
import { UserDisplayNameComponent } from './nav/user-display-name/user-display-name.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [
		LayoutComponent,
		NavComponent,
		NarrowComponent,
		FooterComponent,
		ActiveMenuComponent,
		UserDisplayNameComponent
	],
	exports: [
		LayoutComponent
	]
})
export class LayoutModule { }
