import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticFilesComponent } from './static-files.component';

const routes: Routes = [
	{
		path: '',
		component: StaticFilesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StaticFilesRoutingModule { }
