import { WidgetConfiguration } from './widget';

import { environment } from "../../environments/environment";

export class PageTemplate {
	name: string;
	slug: string;
	props: any;

	constructor(data: {name: string, slug: string, props: any}) {
		this.name = data.name;
		this.slug = data.slug;
		this.props = data.props;
	}

	propsToArray(): any[] {
		return Object.keys(this.props).map(propName => {
			return {key: propName, ...this.props[propName]};
		});
	}
}

export class Page {
	name: string;
	slug: string;
	configuration: WidgetConfiguration[];
	template: string;
	props: any;

	private static mapJSONToWidgetConfiguration(configuration: any[]) {
		return configuration.map(c => {
			const wc = new WidgetConfiguration(c);

			if (wc.areas) {
				Object.keys(wc.areas).forEach(areaSlug => {
					wc.areas[areaSlug] = Page.mapJSONToWidgetConfiguration(wc.areas[areaSlug]);
				});
			}

			return wc;
		});
	}

	constructor(data: {name: string, slug: string, configuration: WidgetConfiguration[], template: string, props: any}) {
		this.name = data.name;
		this.slug = data.slug;
		this.configuration = Page.mapJSONToWidgetConfiguration(data.configuration || []);
		this.template = data.template;
		this.props = data.props;
	}

	get url(): string {
		return `${environment.siteRoot}/${this.slug}/`
	}
}
