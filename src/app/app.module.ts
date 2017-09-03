import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutModule } from './layout/layout.module';
import { PageConstructorModule } from './page-constructor/page-constructor.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { LayoutComponent } from './layout/layout.component';

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
		]
	},

	{ path: '**', redirectTo: 'page-constructor' }
];

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		LayoutModule,
		CoreModule,
		SharedModule,
		NgbModule.forRoot(),
		RouterModule.forRoot(routes),
	],
	exports: [
		RouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
