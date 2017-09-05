import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SlimLoadingBarModule, SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { SortablejsModule } from 'angular-sortablejs';

import { SPCInterceptor } from './intercept';
import { OnlyLoggedInUsersGuard } from './only-logged-in-users.guard';

@NgModule({
	imports: [
		CommonModule,
		NgbModule,
		FormsModule,
		ReactiveFormsModule,
		SlimLoadingBarModule.forRoot(),
		HttpClientModule,
		SortablejsModule,
	],
	declarations: [],
	exports: [
		NgbModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		SlimLoadingBarModule,
		HttpClientModule,
		SortablejsModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: SPCInterceptor,
			multi: true,
		},
		SlimLoadingBarService,
		OnlyLoggedInUsersGuard
	]
})
export class SharedModule { }
