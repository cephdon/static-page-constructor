import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageConstructorComponent } from './page-constructor.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { WidgetDefinitionViewComponent } from './widget-definition-view/widget-definition-view.component';

import { PageResolve } from './page.resolver';
import { PagesResolve } from './pages.resolver';
import { WidgetResolve } from './widget.resolver';
import { WidgetsResolve } from './widgets.resolver';
import { SetActiveMenuItemResolve } from './set-active-menu-item.resolver';
import { PageTemplatesResolve } from './page-templates.resolver';
import { PageTemplateResolve } from './page-template.resolver';
import { PageTemplateViewComponent } from './page-template-view/page-template-view.component';

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
			},
			{
				path: 'widget-definition-view/:id',
				component: WidgetDefinitionViewComponent,
				resolve: {
					widget: WidgetResolve
				}
			},
			{
				path: 'page-template-view/:id',
				component: PageTemplateViewComponent,
				resolve: {
					pageTemplate: PageTemplateResolve
				}
			}
		],
		resolve: {
			menuItem: SetActiveMenuItemResolve,
			pages: PagesResolve,
			widgets: WidgetsResolve,
			pageTemplates: PageTemplatesResolve
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PageConstructorRoutingModule { }