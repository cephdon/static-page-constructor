import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WidgetDefinition, WidgetConfiguration } from './../../../../../core/widgets.service';
import { Page } from './../../../../../core/pages.service';

@Component({
	selector: 'app-row-layout-content-view',
	templateUrl: './row-layout-content-view.component.html',
	styleUrls: ['./row-layout-content-view.component.css']
})
export class RowLayoutContentViewComponent implements OnInit {

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
