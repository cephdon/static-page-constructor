import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SortablejsModule } from 'angular-sortablejs';

import { SPCInterceptor } from './intercept';
import { OnlyLoggedInUsersGuard } from './only-logged-in-users.guard';

import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
	imports: [
		CommonModule,
		NgbModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		SortablejsModule,
		NgProgressModule,
	],
	declarations: [],
	exports: [
		NgbModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		SortablejsModule,
		NgProgressModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: SPCInterceptor,
			multi: true,
		},
		OnlyLoggedInUsersGuard
	]
})
export class SharedModule { }
