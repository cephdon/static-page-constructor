import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { WidgetDefinition, WidgetConfiguration } from './../../core/widgets.service';

import { AddWidgetModalContentComponent } from './add-widget-modal-content/add-widget-modal-content.component';
import { WidgetPropsModalContentComponent } from './widget-props-modal-content/widget-props-modal-content.component';

@Injectable()
class AddWidgetService {

	constructor(private modalService: NgbModal) { }

	public openCreateWidgetWindowForPage(page: any) {
		const ref = this.modalService.open(AddWidgetModalContentComponent);

		ref.result.then((widgetConfiguration:WidgetConfiguration) => {
			page.configuration.push(widgetConfiguration);
		});
	}

	public openCreateWidgetWindowForArea(area: any, widgetConfiguration: WidgetConfiguration) {
		const ref = this.modalService.open(AddWidgetModalContentComponent);

		ref.result.then((wcon:WidgetConfiguration) => {
			widgetConfiguration.addWidgetForArea(area, wcon);
		});
	}

	public openEditWidgetWindow(widgetDefinition: WidgetDefinition, widgetConfiguration: WidgetConfiguration): Promise<any> {
		const ref = this.modalService.open(WidgetPropsModalContentComponent);

		ref.componentInstance.widgetConfiguration = widgetConfiguration;
		ref.componentInstance.widgetDefinition = widgetDefinition;

		return ref.result.then(props => {
			widgetConfiguration.props = props;
		});
	}

}

export {
	AddWidgetService
}
