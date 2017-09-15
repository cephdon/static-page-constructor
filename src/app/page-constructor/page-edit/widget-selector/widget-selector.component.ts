import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';

import { WidgetsService, WidgetDefinition } from './../../../core/widgets.service';

@Component({
	selector: 'app-widget-selector',
	templateUrl: './widget-selector.component.html',
	styleUrls: ['./widget-selector.component.css']
})
export class WidgetSelectorComponent implements OnInit, OnDestroy {

	@Input() form: FormGroup;

	public widgets: WidgetDefinition[];

	private subs: any;

	constructor(private widgetsService: WidgetsService) { }

	ngOnInit() {
		this.addFormControls();
		
		this.subs = this.widgetsService.widgets.subscribe(widgets => 
			this.widgets = widgets);
	}

	ngOnDestroy() {
		this.subs.unsubscribe();
	}

	addFormControls() {
		this.form.addControl('widgetType', new FormControl('', Validators.required));
	}

}
