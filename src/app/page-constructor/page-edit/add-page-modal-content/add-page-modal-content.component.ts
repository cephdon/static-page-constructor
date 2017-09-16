import { Component, OnInit, OnDestroy } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PagesService, Page } from './../../../core/pages.service';
import { PageTemplatesService, PageTemplate } from './../../../core/page-templates.service';

@Component({
	selector: 'app-add-page-modal-content',
	templateUrl: './add-page-modal-content.component.html',
	styleUrls: ['./add-page-modal-content.component.css']
})
export class AddPageModalContentComponent implements OnInit, OnDestroy {

	public form: FormGroup;
	public pageTemplates: PageTemplate[];

	private sub: any;

	constructor(public activeModal: NgbActiveModal,
				private pagesService: PagesService,
				private pageTemplatesService: PageTemplatesService) { }

	ngOnInit() {
		this.form = new FormGroup({});

		this.form.addControl('name', new FormControl('', Validators.required));
		this.form.addControl('slug', new FormControl('', Validators.required));
		this.form.addControl('template', new FormControl('', Validators.required));

		this.sub = this.pageTemplatesService.pageTemplates.subscribe(pts => 
			this.pageTemplates = pts);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	public onSubmit() {
		if (!this.form.valid) {
			return;
		}

		const page: Page = new Page({
			name: this.form.value.name,
			slug: this.form.value.slug,
			configuration: [],
			template: this.form.value.template.slug,
			props: {}
		});

		this.pagesService.save(page)
			.then(() => this.activeModal.close(page));
	}

}
