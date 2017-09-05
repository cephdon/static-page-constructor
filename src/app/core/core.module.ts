import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesService } from './pages.service';
import { WidgetsService } from './widgets.service';
import { LoginService } from './login.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	providers: [
		PagesService,
		WidgetsService,
		LoginService
	]
})
export class CoreModule { }
