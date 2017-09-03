import { WidgetConfiguration } from './widget';

export class Page {
	name: string;
	slug: string;
	configuration: WidgetConfiguration[]

	constructor(data: {name: string, slug: string, configuration: WidgetConfiguration[]}) {
		this.name = data.name;
		this.slug = data.slug;
		this.configuration = data.configuration;
	}
}
