import { makeid } from './utils';

export class WidgetDefinition {
	slug: string;
	name: string;
	previewImage: string;
	props: { [s: string]: {[s: string]: string|number|boolean|any } };

	constructor(data: {name: string, slug: string, previewImage: string, props: any}) {
		this.props = data.props;
		this.name = data.name;
		this.slug = data.slug;
		this.previewImage = data.previewImage;
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

	constructor(data: {widget: string, props: any, id?: string}) {
		this.props = data.props;
		this.widget = data.widget;
		this.id = data.id || makeid();
	}
}