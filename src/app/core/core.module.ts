import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesService } from './pages.service';
import { WidgetsService } from './widgets.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	providers: [
		PagesService,
		WidgetsService
	]
})
export class CoreModule { }
