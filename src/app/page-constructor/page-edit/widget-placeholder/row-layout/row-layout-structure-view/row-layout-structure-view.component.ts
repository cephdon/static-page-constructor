import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WidgetDefinition, WidgetConfiguration } from './../../../../../core/widgets.service';
import { Page } from './../../../../../core/pages.service';
import { AddWidgetService } from './../../../add-widget.service';

@Component({
	selector: 'app-row-layout-structure-view',
	templateUrl: './row-layout-structure-view.component.html',
	styleUrls: ['./row-layout-structure-view.component.css']
})
export class RowLayoutStructureViewComponent implements OnInit {

	@Input() widgetConfiguration: WidgetConfiguration;

	@Input() widgetDefinition: WidgetDefinition;

	@Input() page: Page;

	constructor(private addWidgetService: AddWidgetService) { }

	ngOnInit() {
	}

	public addWidget(area) {
		this.addWidgetService.openCreateWidgetWindowForArea(
			area, 
			this.widgetConfiguration
		);
	}

}
