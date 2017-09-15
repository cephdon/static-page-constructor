import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { WidgetDefinition, WidgetConfiguration } from './../../core/widgets.service';

import { AddWidgetModalContentComponent } from './add-widget-modal-content/add-widget-modal-content.component';

@Injectable()
class AddWidgetService {

	constructor(private modalService: NgbModal) { }

	openCreateWidgetWindowForPage(page: any) {
		const ref = this.modalService.open(AddWidgetModalContentComponent);

		ref.result.then((widgetConfiguration:WidgetConfiguration) => {
			page.configuration.push(widgetConfiguration);
		}).catch(() => {});
	}

	openCreateWidgetWindowForArea(area: any, widgetConfiguration: WidgetConfiguration) {
		const ref = this.modalService.open(AddWidgetModalContentComponent);

		ref.result.then((wcon:WidgetConfiguration) => {
			debugger
			widgetConfiguration.addWidgetForArea(area, wcon);
		}).catch(() => {});
	}

}

export {
	AddWidgetService
}
