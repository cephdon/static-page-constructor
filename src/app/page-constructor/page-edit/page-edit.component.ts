import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Page, PagesService } from './../../core/pages.service';
import { WidgetConfiguration } from './../../core/widgets.service';

import { AddWidgetService } from './add-widget.service';

@Component({
	selector: 'app-page-edit',
	templateUrl: './page-edit.component.html',
	styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit, OnDestroy {
	page: Page;

	view: string = 'structure';

	constructor(private activatedRoute: ActivatedRoute,
				private modalService: NgbModal,
				private pagesService: PagesService,
				private router: Router,
				private addWidgetService: AddWidgetService) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.page = data.page;
		});
	}

	ngOnDestroy() {
	}

	openCreateWidgetWindow() {
		this.addWidgetService.openCreateWidgetWindowForPage(this.page);
	}

	savePage() {
		this.pagesService.save(this.page);
	}

	publishPage() {
		this.pagesService.publish(this.page);
	}

	removePage() {
		this.pagesService.removePage(this.page).then(() => {
			this.router.navigate(['/page-constructor']);
		});
	}

}
