import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { WidgetDefinition, WidgetsService } from './../core/widgets.service';

@Injectable()
export class WidgetsResolve implements Resolve<WidgetDefinition[]> {

	constructor(private widgetsService: WidgetsService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.widgetsService.loadWidgetDefinitions();
	}
}