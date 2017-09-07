import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Page, PagesService } from './../../../../../core/pages.service';

@Component({
	selector: 'app-page-modal-content',
	templateUrl: './page-modal-content.component.html',
	styleUrls: ['./page-modal-content.component.css']
})
export class PageModalContentComponent implements OnInit {
	public form: FormGroup;
	public pages: Page[] = [];

	constructor(public activeModal: NgbActiveModal,
				private pagesService: PagesService) { }

	ngOnInit() {
		this.form = new FormGroup({});

		this.form.addControl('page', new FormControl('', Validators.required));

		this.pagesService.getPages().then(pages => this.pages = pages);
	}

	public onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.activeModal.close(this.form.value.page.url);
	}

}
