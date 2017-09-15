import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { WidgetDefinition, WidgetConfiguration, WidgetsService } from './../../../core/widgets.service';

import { Page } from './../../../core/pages.service';

@Component({
	selector: 'app-widget-placeholder',
	templateUrl: './widget-placeholder.component.html',
	styleUrls: ['./widget-placeholder.component.css']
})
export class WidgetPlaceholderComponent implements OnInit {

	@Input() widgetConfiguration: WidgetConfiguration;

	@Input() structuralView: boolean = true;

	@Input() page: Page;

	public widgetDefinition: WidgetDefinition;

	constructor(private widgetsService: WidgetsService) { }

	ngOnInit() {
		this.widgetsService.getWidgetDefinition(this.widgetConfiguration.widget)
			.then(wd => this.widgetDefinition = wd);
	}
}
