import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { WidgetDefinition, WidgetsService } from './../core/widgets.service';

@Injectable()
export class WidgetResolve implements Resolve<WidgetDefinition> {

	constructor(private widgetsService: WidgetsService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.widgetsService.getWidgetDefinition(route.params.id);
	}
}