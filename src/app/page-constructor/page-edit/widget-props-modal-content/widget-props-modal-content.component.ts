import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup } from '@angular/forms';

import { WidgetDefinition, WidgetsService, WidgetConfiguration } from './../../../core/widgets.service';

@Component({
	selector: 'app-widget-props-modal-content',
	templateUrl: './widget-props-modal-content.component.html',
	styleUrls: ['./widget-props-modal-content.component.css']
})
export class WidgetPropsModalContentComponent implements OnInit {

	@Input() widgetConfiguration: WidgetConfiguration;

	@Input() widgetDefinition: WidgetDefinition;

	public form: FormGroup;

	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit() {
		this.form = new FormGroup({});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.activeModal.close(this.form.value);
	}

}
