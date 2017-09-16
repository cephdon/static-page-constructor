import { Component, OnInit, OnDestroy } from '@angular/core';

import { PageTemplate, PageTemplatesService } from './../../core/page-templates.service';

@Component({
	selector: 'app-sidebar-page-templates',
	templateUrl: './sidebar-page-templates.component.html',
	styleUrls: ['./sidebar-page-templates.component.css']
})
export class SidebarPageTemplatesComponent implements OnInit, OnDestroy {

	public pageTemplates: PageTemplate[];

	private sub: any;

	constructor(private pageTemplatesService: PageTemplatesService) { }

	ngOnInit() {
		this.sub = this.pageTemplatesService.pageTemplates.subscribe(pts =>
			this.pageTemplates = pts);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

}
