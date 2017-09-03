import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';

import { WidgetDefinition, WidgetsService, WidgetConfiguration } from './../../../core/widgets.service';

@Component({
	selector: 'app-widget-props',
	templateUrl: './widget-props.component.html',
	styleUrls: ['./widget-props.component.css']
})
export class WidgetPropsComponent implements OnInit {

	@Input() widgetConfiguration: WidgetConfiguration;

	@Input() widgetDefinition: WidgetDefinition;

	@Input() form: FormGroup;

	@Output() save = new EventEmitter<any>();

	public props: any[];

	constructor() { }

	ngOnInit() {
		this.props = this.widgetDefinition.toArray();

		this.props.forEach(prop => {
			const val = this.widgetConfiguration.props[prop.key] || '';

			this.form.addControl(prop.key, prop.required ? new FormControl(val, Validators.required)
				: new FormControl(val));
		})
	}

}
