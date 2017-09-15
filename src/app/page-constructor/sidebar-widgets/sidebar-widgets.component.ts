import { Component, OnInit, OnDestroy } from '@angular/core';

import { WidgetsService, WidgetDefinition } from './../../core/widgets.service';

@Component({
	selector: 'app-sidebar-widgets',
	templateUrl: './sidebar-widgets.component.html',
	styleUrls: ['./sidebar-widgets.component.css']
})
export class SidebarWidgetsComponent implements OnInit, OnDestroy {
	widgets: WidgetDefinition[] = [];

	private subs: any;

	constructor(private widgetsService: WidgetsService) { }

	ngOnInit() {
		this.subs = this.widgetsService.widgets.subscribe(widgets => 
			this.widgets = widgets);
	}

	ngOnDestroy() {
		this.subs.unsubscribe();
	}

}