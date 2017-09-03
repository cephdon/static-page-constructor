import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';

import { WidgetsService, WidgetDefinition } from './../../../core/widgets.service';

@Component({
	selector: 'app-widget-selector',
	templateUrl: './widget-selector.component.html',
	styleUrls: ['./widget-selector.component.css']
})
export class WidgetSelectorComponent implements OnInit {

	@Input() form: FormGroup;

	public widgets: WidgetDefinition[];

	constructor(private widgetsService: WidgetsService) { }

	ngOnInit() {
		this.addFormControls();
		this.getWidgets();
	}

	addFormControls() {
		this.form.addControl('widgetType', new FormControl('', Validators.required));
	}

	getWidgets(): Promise<WidgetDefinition[]> {
		return this.widgetsService.getWidgets().then(widgets => this.widgets = widgets);
	}

}
