import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { StaticFilesRoutingModule } from './static-files-routing.module';
import { StaticFilesComponent } from './static-files.component';

@NgModule({
	imports: [
		CommonModule,
		StaticFilesRoutingModule,
		SharedModule,
	],
	declarations: [
		StaticFilesComponent,
	]
})
export class StaticFilesModule { }
