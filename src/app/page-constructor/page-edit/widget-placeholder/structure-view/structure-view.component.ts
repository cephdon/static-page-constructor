import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WidgetDefinition, WidgetConfiguration } from './../../../../core/widgets.service';

import { Page } from './../../../../core/pages.service';

@Component({
	selector: 'app-structure-view',
	templateUrl: './structure-view.component.html',
	styleUrls: ['./structure-view.component.css']
})
export class StructureViewComponent implements OnInit {

	@Input() widgetConfiguration: WidgetConfiguration;

	@Input() widgetDefinition: WidgetDefinition;

	@Input() page: Page;

	@Output() edit = new EventEmitter<void>();

	@Output() delete = new EventEmitter<void>();

	constructor() { }

	ngOnInit() {
	}

	editClick() {
		this.edit.emit();
	}

	deleteClick() {
		this.delete.emit();
	}

}
