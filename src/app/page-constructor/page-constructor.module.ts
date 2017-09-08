import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { StaticFilesModule } from './../static-files/static-files.module';

import { PageConstructorRoutingModule } from './page-constructor-routing.module';
import { PageConstructorComponent } from './page-constructor.component';
import { PageEditComponent } from './page-edit/page-edit.component';

import { PageResolve } from './page.resolver';
import { WidgetsResolve } from './widgets.resolver';

import { WidgetPlaceholderComponent } from './page-edit/widget-placeholder/widget-placeholder.component';
import { WidgetPropsModalContentComponent } from './page-edit/widget-props-modal-content/widget-props-modal-content.component';
import { AddWidgetModalContentComponent } from './page-edit/add-widget-modal-content/add-widget-modal-content.component';
import { WidgetPropsComponent } from './page-edit/widget-props/widget-props.component';
import { WidgetSelectorComponent } from './page-edit/widget-selector/widget-selector.component';
import { AddPageModalContentComponent } from './page-edit/add-page-modal-content/add-page-modal-content.component';
import { PagePropsComponent } from './page-edit/page-props/page-props.component';
import { PropTypeLinkComponent } from './page-edit/prop-types/prop-type-link/prop-type-link.component';
import { StaticFileModalContentComponent } from './page-edit/prop-types/prop-type-link/static-file-modal-content/static-file-modal-content.component';
import { PageModalContentComponent } from './page-edit/prop-types/prop-type-link/page-modal-content/page-modal-content.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		PageConstructorRoutingModule,
		StaticFilesModule,
	],
	providers: [
		PageResolve,
		WidgetsResolve,
	],
	declarations: [
		PageConstructorComponent,
		PageEditComponent,
		WidgetPlaceholderComponent,
		WidgetPropsModalContentComponent,
		AddWidgetModalContentComponent,
		WidgetPropsComponent,
		WidgetSelectorComponent,
		AddPageModalContentComponent,
		PagePropsComponent,
		PropTypeLinkComponent,
		StaticFileModalContentComponent,
		PageModalContentComponent,
	],
	entryComponents: [
		WidgetPropsModalContentComponent,
		AddWidgetModalContentComponent,
		AddPageModalContentComponent,
		StaticFileModalContentComponent,
		PageModalContentComponent,
	]
})
export class PageConstructorModule { }