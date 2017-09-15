import { WidgetConfiguration } from './widget';

import { environment } from "../../environments/environment";

export class Page {
	name: string;
	slug: string;
	configuration: WidgetConfiguration[];

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

	constructor(data: {name: string, slug: string, configuration: WidgetConfiguration[]}) {
		this.name = data.name;
		this.slug = data.slug;
		this.configuration = Page.mapJSONToWidgetConfiguration(data.configuration || []);
	}

	get url(): string {
		return `${environment.siteRoot}/${this.slug}.html`
	}
}
