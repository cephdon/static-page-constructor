import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticFilesComponent } from './static-files.component';
import { SetActiveMenuItemResolve } from './set-active-menu-item.resolver';

const routes: Routes = [
	{
		path: '',
		component: StaticFilesComponent,
		resolve: {
			menuItem: SetActiveMenuItemResolve
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StaticFilesRoutingModule { }
