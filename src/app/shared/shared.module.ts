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
import { UiActivityIndicatorService } from './ui-activity-indicator.service';
import { ShakeButtonDirective } from './shake-button.directive';

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
	declarations: [
		ShakeButtonDirective
	],
	exports: [
		NgbModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		SortablejsModule,
		NgProgressModule,
		ShakeButtonDirective,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: SPCInterceptor,
			multi: true,
		},
		OnlyLoggedInUsersGuard,
		UiActivityIndicatorService,
	]
})
export class SharedModule { }
