import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WidgetDefinition, WidgetConfiguration } from './../../../../core/widgets.service';

import { Page, PagesService } from './../../../../core/pages.service';
import { AddWidgetService } from './../../add-widget.service';

@Component({
	selector: 'app-structure-view',
	templateUrl: './structure-view.component.html',
	styleUrls: ['./structure-view.component.css']
})
export class StructureViewComponent implements OnInit {

	@Input() widgetConfiguration: WidgetConfiguration;

	@Input() widgetDefinition: WidgetDefinition;

	@Input() page: Page;

	constructor(private addWidgetService: AddWidgetService,
				private pagesService: PagesService) { }

	ngOnInit() {
	}

	public edit() {
		this.addWidgetService.openEditWidgetWindow(this.widgetDefinition, this.widgetConfiguration);
	}

	public delete() {
		this.pagesService.removeWidget(
			this.page, 
			this.widgetConfiguration
		);
	}

}
