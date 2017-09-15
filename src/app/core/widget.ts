import { makeid } from './utils';

export class WidgetDefinition {
	slug: string;
	name: string;
	previewImage?: string;
	props: { [s: string]: {[s: string]: string|number|boolean|any } };
	layout: any;

	constructor(data: {name: string, slug: string, previewImage?: string, props: any, layout: any}) {
		this.props = data.props;
		this.name = data.name;
		this.slug = data.slug;
		this.previewImage = data.previewImage;
		this.layout = data.layout;
	}

	toArray(): any[] {
		return Object.keys(this.props).map(propName => {
			return {key: propName, ...this.props[propName]};
		});
	}
}

export class WidgetConfiguration {
	widget: string;
	id: string;
	props: { [s: string]: string };
	areas: { [s: string]: WidgetConfiguration[] };

	constructor(data: {widget: string, props: any, areas?: any, id?: string}) {
		this.props = data.props;
		this.widget = data.widget;
		this.areas = data.areas;
		this.id = data.id || makeid();
	}

	forArea({slug}) {
		return this.areas[slug];
	}

	addWidgetForArea(area: any, wconf: WidgetConfiguration) {
		const configuration = this.areas[area.slug];
		configuration.push(wconf);
	}

	hasAreas() {
		return Object.keys(this.areas).length > 0;
	}
}