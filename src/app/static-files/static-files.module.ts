import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { StaticFilesRoutingModule } from './static-files-routing.module';
import { StaticFilesComponent } from './static-files.component';
import { FileControlComponent } from './file-control/file-control.component';
import { FileBoxComponent } from './file-box/file-box.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SetActiveMenuItemResolve } from './set-active-menu-item.resolver';

@NgModule({
	imports: [
		CommonModule,
		StaticFilesRoutingModule,
		SharedModule,
	],
	declarations: [
		StaticFilesComponent,
		FileControlComponent,
		FileBoxComponent,
		SearchInputComponent,
	],
	exports: [
		StaticFilesComponent
	],
	providers: [
		SetActiveMenuItemResolve
	]
})
export class StaticFilesModule { }
