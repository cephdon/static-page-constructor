import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesService } from './pages.service';
import { WidgetsService } from './widgets.service';
import { LoginService } from './login.service';
import { CognitoService } from './cognito.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	providers: [
		PagesService,
		WidgetsService,
		LoginService,
		CognitoService
	]
})
export class CoreModule { }
