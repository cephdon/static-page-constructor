import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageTemplate } from './../../core/page-templates.service';

@Component({
	selector: 'app-page-template-view',
	templateUrl: './page-template-view.component.html',
	styleUrls: ['./page-template-view.component.css']
})
export class PageTemplateViewComponent implements OnInit {
	public pageTemplate: PageTemplate;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.pageTemplate = data.pageTemplate;
		});
	}

}
