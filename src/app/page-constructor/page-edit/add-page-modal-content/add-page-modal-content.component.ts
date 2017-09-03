import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PagesService, Page } from './../../../core/pages.service';

@Component({
	selector: 'app-add-page-modal-content',
	templateUrl: './add-page-modal-content.component.html',
	styleUrls: ['./add-page-modal-content.component.css']
})
export class AddPageModalContentComponent implements OnInit {

	public form: FormGroup;

	constructor(public activeModal: NgbActiveModal,
				private pagesService: PagesService) { }

	ngOnInit() {
		this.form = new FormGroup({});

		this.form.addControl('name', new FormControl('', Validators.required));
		this.form.addControl('slug', new FormControl('', Validators.required));
	}

	public onSubmit() {
		if (!this.form.valid) {
			return;
		}

		const page: Page = new Page({
			name: this.form.value.name,
			slug: this.form.value.slug,
			configuration: []
		});

		this.pagesService.save(page)
			.then(() => this.activeModal.close(page));
	}

}
