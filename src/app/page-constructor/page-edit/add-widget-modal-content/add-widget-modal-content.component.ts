import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup } from '@angular/forms';

import { WidgetDefinition, WidgetsService, WidgetConfiguration } from './../../../core/widgets.service';

@Component({
	selector: 'app-add-widget-modal-content',
	templateUrl: './add-widget-modal-content.component.html',
	styleUrls: ['./add-widget-modal-content.component.css']
})
export class AddWidgetModalContentComponent implements OnInit {

	public form: FormGroup;

	constructor(public activeModal: NgbActiveModal,
				private widgetsService: WidgetsService) { }

	ngOnInit() {
		this.form = new FormGroup({});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		const widgetDefinition: WidgetDefinition = this.form.value.widgetType;

		const widgetConfiguration: WidgetConfiguration = this.widgetsService
			.instantiateWidgetDefinition(widgetDefinition);

		this.activeModal.close(widgetConfiguration);
	}

}
