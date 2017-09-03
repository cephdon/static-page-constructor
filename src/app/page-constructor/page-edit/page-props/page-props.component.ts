import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { Page, PagesService } from './../../../core/pages.service';

@Component({
	selector: 'app-page-props',
	templateUrl: './page-props.component.html',
	styleUrls: ['./page-props.component.css']
})
export class PagePropsComponent implements OnInit {

	@Input() page: Page;

	public form: FormGroup;

	constructor(private pagesService: PagesService,
				private router: Router) { }

	ngOnInit() {
		this.form = new FormGroup({
			'name': new FormControl(this.page.name, Validators.required)
		});
	}

	public onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.page.name = this.form.value.name;

		this.pagesService.save(this.page).then((newPage: Page) => {
		});
	}

}
