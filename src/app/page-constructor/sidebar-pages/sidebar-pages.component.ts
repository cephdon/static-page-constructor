import { Component, OnInit } from '@angular/core';

import { PagesService, Page } from './../../core/pages.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AddPageModalContentComponent } from './../page-edit/add-page-modal-content/add-page-modal-content.component';

@Component({
	selector: 'app-sidebar-pages',
	templateUrl: './sidebar-pages.component.html',
	styleUrls: ['./sidebar-pages.component.css']
})
export class SidebarPagesComponent implements OnInit {
	pages: Page[] = [];

	subscription: any;

	constructor(private pagesService: PagesService,
				private modalService: NgbModal) { }

	ngOnInit() {
		this.getPages();

		this.subscription = this.pagesService.pageEdited$.subscribe(() => {
			this.getPages();
		});
	}

	getPages() {
		this.pagesService.getPages().then(pages => this.pages = pages);
	}

	openCreatePageWindow() {
		const ref = this.modalService.open(AddPageModalContentComponent);

		ref.result.then((page: Page) => {
			this.getPages();
		}).catch(() => {});
	}

}
