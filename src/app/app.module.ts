import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutModule } from './layout/layout.module';
import { PageConstructorModule } from './page-constructor/page-constructor.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { StaticFilesModule } from './static-files/static-files.module';

import { LayoutComponent } from './layout/layout.component';
import { NarrowComponent } from './layout/narrow/narrow.component';

import { LoginComponent } from './users/login/login.component';
import { SetPasswordComponent } from './users/set-password/set-password.component';
import { LogoutComponent } from './users/logout/logout.component';

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
		path: '',
		component: NarrowComponent,
		children: [
			{
				path: 'login',
				component: LoginComponent,
			},
			{
				path: 'logout',
				component: LogoutComponent,
			},
			{
				path: 'set-password',
				component: SetPasswordComponent
			},
		],
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
