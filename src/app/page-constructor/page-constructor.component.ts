import { Component, OnInit, ViewChild } from '@angular/core';

import { PagesService, Page } from './../core/pages.service';

import { NgbModal, NgbPopover } from '@ng-bootstrap/ng-bootstrap';

import { AddPageModalContentComponent } from './page-edit/add-page-modal-content/add-page-modal-content.component';

@Component({
	selector: 'app-page-constructor',
	templateUrl: './page-constructor.component.html',
	styleUrls: ['./page-constructor.component.css']
})
export class PageConstructorComponent implements OnInit {
	pages: Page[] = [];

	subscription: any;

	@ViewChild(NgbPopover) public popover: NgbPopover;

	constructor(private pagesService: PagesService,
				private modalService: NgbModal) { }

	getPages() {
		this.pagesService.getPages().then(pages => this.pages = pages).then(() => {
			if (!this.pages.length) {
				this.popover.open();
			} else {
				this.popover.close();
			}
		});
	}

	ngOnInit() {
		this.getPages();

		this.subscription = this.pagesService.pageEdited$.subscribe(() => {
			this.getPages();
		});
	}

	openCreatePageWindow() {
		const ref = this.modalService.open(AddPageModalContentComponent);

		ref.result.then((page: Page) => {
			this.getPages();
		}).catch(() => {});
	}

}
