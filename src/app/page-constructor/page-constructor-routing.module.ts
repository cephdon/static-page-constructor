import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageConstructorComponent } from './page-constructor.component';
import { PageEditComponent } from './page-edit/page-edit.component';

import { PageResolve } from './page.resolver';
import { WidgetsResolve } from './widgets.resolver';
import { SetActiveMenuItemResolve } from './set-active-menu-item.resolver';

const routes: Routes = [
	{
		path: '',
		component: PageConstructorComponent,
		children: [
			{
				path: 'page-edit/:id',
				component: PageEditComponent,
				resolve: {
					page: PageResolve
				}
			}
		],
		resolve: {
			menuItem: SetActiveMenuItemResolve
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PageConstructorRoutingModule { }