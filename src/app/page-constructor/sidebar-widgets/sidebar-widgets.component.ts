import { Component, OnInit } from '@angular/core';

import { WidgetsService, WidgetDefinition } from './../../core/widgets.service';

@Component({
	selector: 'app-sidebar-widgets',
	templateUrl: './sidebar-widgets.component.html',
	styleUrls: ['./sidebar-widgets.component.css']
})
export class SidebarWidgetsComponent implements OnInit {
	widgets: WidgetDefinition[] = [];

	constructor(private widgetsService: WidgetsService) { }

	ngOnInit() {
		this.getWidgets();
	}

	getWidgets() {
		this.widgetsService.getWidgets().then(widgets => this.widgets = widgets);
	}

}