import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WidgetDefinition, WidgetConfiguration } from './../../../../core/widgets.service';

import { Page } from './../../../../core/pages.service';
import { AddWidgetService } from './../../add-widget.service';

@Component({
	selector: 'app-content-view',
	templateUrl: './content-view.component.html',
	styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {

	@Input() widgetConfiguration: WidgetConfiguration;

	@Input() widgetDefinition: WidgetDefinition;

	@Input() page: Page;

	constructor(private addWidgetService: AddWidgetService) { }

	ngOnInit() {
	}

	public edit() {
		this.addWidgetService.openEditWidgetWindow(this.widgetDefinition, this.widgetConfiguration);
	}
}
