import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WidgetDefinition, WidgetConfiguration } from './../../../../core/widgets.service';

import { Page } from './../../../../core/pages.service';

@Component({
	selector: 'app-content-view',
	templateUrl: './content-view.component.html',
	styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {

	@Input() widgetConfiguration: WidgetConfiguration;

	@Input() widgetDefinition: WidgetDefinition;

	@Input() page: Page;

	@Output() edit = new EventEmitter<void>();

	constructor() { }

	ngOnInit() {
	}

	editClick() {
		this.edit.emit();
	}
}
