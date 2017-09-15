import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ReplaySubject, Observable } from 'rxjs';

import { WidgetDefinition, WidgetConfiguration } from './widget';


@Injectable()
class WidgetsService {
	private _widgets: WidgetDefinition[];
	private widgetsSubject = new ReplaySubject<WidgetDefinition[]>();

	public widgets = this.widgetsSubject.asObservable();

	constructor(private httpClient: HttpClient) { }

	loadWidgetDefinitions(): Promise<WidgetDefinition[]> {
		return this.httpClient.get<WidgetDefinition[]>('/ListWidgets')
			.toPromise()
			.then(data => data.map(item => new WidgetDefinition(item)))
			.then(widgets => {
				this._widgets = widgets;
				this.widgetsSubject.next(this._widgets);
				return widgets;
			});
	}

	getWidgetDefinition(slug: string): Promise<WidgetDefinition> {
		return this.httpClient.get<WidgetDefinition>(`/GetWidget?slug=${slug}`)
			.toPromise()
			.then(data => new WidgetDefinition(data));
	}

	instantiateWidgetDefinition(widgetDefinition: WidgetDefinition): WidgetConfiguration {
		let areas;

		switch (widgetDefinition.layout.type) {
			case 'row':
				areas = widgetDefinition.layout.areas.reduce((acc, area) => {
					acc[area.slug] = [];
					return acc;
				}, {});
			default:
				areas = {};
				break;
		}

		return new WidgetConfiguration({
			widget: widgetDefinition.slug,
			props: widgetDefinition.toArray().reduce((props, prop) => {
				props[prop.key] = '';
				return props;
			}, {}),
			areas: areas
		});
	}

}

export {
	WidgetDefinition,
	WidgetsService,
	WidgetConfiguration,
}