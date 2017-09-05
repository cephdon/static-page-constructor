import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutModule } from './layout/layout.module';
import { PageConstructorModule } from './page-constructor/page-constructor.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

import { LayoutComponent } from './layout/layout.component';

import { LoginComponent } from './users/login/login.component';

import { OnlyLoggedInUsersGuard } from './shared/only-logged-in-users.guard';

import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				redirectTo: 'page-constructor',
				pathMatch: 'full'
			},
			{
				path: 'page-constructor',
				loadChildren: 'app/page-constructor/page-constructor.module#PageConstructorModule'
			},
			{
				path: 'static-files',
				loadChildren: 'app/static-files/static-files.module#StaticFilesModule'
			},
		],
		canActivate: [
			OnlyLoggedInUsersGuard,
		]
	},

	{
		path: 'login',
		component: LoginComponent,
	},

	{ path: '**', redirectTo: 'page-constructor' }
];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		LayoutModule,
		CoreModule,
		SharedModule,
		NgbModule.forRoot(),
		RouterModule.forRoot(routes),
		UsersModule,
	],
	exports: [
		RouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
