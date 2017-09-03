import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { WidgetDefinition, WidgetConfiguration } from './widget';

@Injectable()
class WidgetsService {

	constructor(private httpClient: HttpClient) { }

	getWidgets(): Promise<WidgetDefinition[]> {
		return this.httpClient.get<WidgetDefinition[]>('/ListWidgets')
			.toPromise()
			.then(data => data.map(item => new WidgetDefinition(item)));
	}

	getWidget(slug: string): Promise<WidgetDefinition> {
		return this.httpClient.get<WidgetDefinition>(`/GetWidget?slug=${slug}`)
			.toPromise()
			.then(data => new WidgetDefinition(data));
	}

	instantiateWidgetDefinition(widgetDefinition: WidgetDefinition): WidgetConfiguration {
		return new WidgetConfiguration({
			widget: widgetDefinition.slug,
			props: widgetDefinition.toArray().reduce((props, prop) => {
				props[prop.key] = '';
				return props;
			}, {})
		});
	}

}

export {
	WidgetDefinition,
	WidgetsService,
	WidgetConfiguration,
}