import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Page, PagesService } from './../../../core/pages.service';
import { PageTemplate, PageTemplatesService } from './../../../core/page-templates.service';

@Component({
	selector: 'app-page-props',
	templateUrl: './page-props.component.html',
	styleUrls: ['./page-props.component.css']
})
export class PagePropsComponent implements OnInit {

	@Input() page: Page;

	public form: FormGroup;
	public template: PageTemplate;
	public props: any;

	constructor(private activatedRoute: ActivatedRoute,
				private pageTemplatesService: PageTemplatesService,
				private pagesService: PagesService,
				private router: Router) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.page = data.page;

			this.pageTemplatesService.getPageTemplate(this.page.template).then(pt => {
				this.template = pt;
				this.buildForm();
			});
		});
	}

	buildForm() {
		this.form = new FormGroup({
			'name': new FormControl(this.page.name, Validators.required)
		});

		this.props = this.template.propsToArray();

		this.props.forEach(prop => {
			const val = this.page.props[prop.key] || '';

			this.form.addControl(
				prop.key, 
				prop.required ? new FormControl(val, Validators.required) : 
								new FormControl(val)
			);
		});
	}

	public onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.page.name = this.form.value.name;

		this.props.forEach(prop => {
			this.page.props[prop.key] = this.form.value[prop.key];
		});

		this.pagesService.save(this.page).then((newPage: Page) => {
		});
	}

	public isText(prop) {
		return prop.type === 'string';
	}

	public isTextarea(prop) {
		return prop.type === 'longstring';
	}

	public isEmail(prop) {
		return prop.type === 'email';
	}

	public isNumber(prop) {
		return prop.type === 'number';
	}

	public isLink(prop) {
		return prop.type === 'link';
	}

}
