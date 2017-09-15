import { WidgetConfiguration } from './widget';

import { environment } from "../../environments/environment";

export class Page {
	name: string;
	slug: string;
	configuration: WidgetConfiguration[]

	constructor(data: {name: string, slug: string, configuration: WidgetConfiguration[]}) {
		this.name = data.name;
		this.slug = data.slug;
		this.configuration = (data.configuration || []).map(c => new WidgetConfiguration(c));
	}

	get url(): string {
		return `${environment.siteRoot}/${this.slug}.html`
	}
}
