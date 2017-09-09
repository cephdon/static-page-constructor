import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { WidgetDefinition } from './../../core/widgets.service';

@Component({
	selector: 'app-widget-definition-view',
	templateUrl: './widget-definition-view.component.html',
	styleUrls: ['./widget-definition-view.component.css']
})
export class WidgetDefinitionViewComponent implements OnInit {
	public widget: WidgetDefinition;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.widget = data.widget;
		});
	}

}
