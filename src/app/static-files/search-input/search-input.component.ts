import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { StaticFilesService } from '../../core/static-files.service';

@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
	styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
	public form: FormGroup;

	constructor(private staticFilesService: StaticFilesService) { }

	ngOnInit() {
		this.form = new FormGroup({
			term: new FormControl('')
		});

		this.form.valueChanges.subscribe(data => {
			this.staticFilesService.filter({term: data.term});
		});
	}

	public onSubmit() {
		return false;
	}

}
