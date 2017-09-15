import { Component, OnInit, OnDestroy } from '@angular/core';

import { PagesService, Page } from './../../core/pages.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AddPageModalContentComponent } from './../page-edit/add-page-modal-content/add-page-modal-content.component';

@Component({
	selector: 'app-sidebar-pages',
	templateUrl: './sidebar-pages.component.html',
	styleUrls: ['./sidebar-pages.component.css']
})
export class SidebarPagesComponent implements OnInit, OnDestroy {
	pages: Page[] = [];

	subscription: any;

	constructor(private pagesService: PagesService,
				private modalService: NgbModal) { }

	ngOnInit() {
		this.subscription = this.pagesService.pages.subscribe(pages =>
			this.pages = pages);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	openCreatePageWindow() {
		const ref = this.modalService.open(AddPageModalContentComponent);
	}

}
