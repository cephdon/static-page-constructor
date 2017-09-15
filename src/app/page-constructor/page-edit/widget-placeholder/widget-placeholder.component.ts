import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { WidgetDefinition, WidgetConfiguration, WidgetsService } from './../../../core/widgets.service';
import { WidgetPropsModalContentComponent } from '../widget-props-modal-content/widget-props-modal-content.component';

import { Page, PagesService } from './../../../core/pages.service';

@Component({
	selector: 'app-widget-placeholder',
	templateUrl: './widget-placeholder.component.html',
	styleUrls: ['./widget-placeholder.component.css']
})
export class WidgetPlaceholderComponent implements OnInit {

	@Input() widgetConfiguration: WidgetConfiguration;

	@Input() structuralView: boolean = true;

	@Input() page: Page;

	@Input() index: number;

	public widgetDefinition: WidgetDefinition;

	constructor(
			private widgetsService: WidgetsService,
			private modalService: NgbModal,
			private pagesService: PagesService) { }

	ngOnInit() {
		this.widgetsService.getWidgetDefinition(this.widgetConfiguration.widget)
			.then(wd => this.widgetDefinition = wd);
	}

	public openWidgetPropsWindow() {
		const ref = this.modalService.open(WidgetPropsModalContentComponent);

		ref.componentInstance.widgetConfiguration = this.widgetConfiguration;
		ref.componentInstance.widgetDefinition = this.widgetDefinition;

		ref.result.then(props => {
			this.widgetConfiguration.props = props;
		}).catch(() => {});
	}

	public removeWidget(widgetConfiguration) {
		this.pagesService.removeWidget(
			this.page, 
			widgetConfiguration ? widgetConfiguration : this.widgetConfiguration
		);
	}
}
