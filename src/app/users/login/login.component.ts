import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public form: FormGroup;

	constructor() { }

	ngOnInit() {
		this.form = new FormGroup({});

		this.form.addControl('email', new FormControl('', [
			Validators.required, 
			Validators.email
		]));

		this.form.addControl('password', new FormControl('', [
			Validators.required
		]));
	}

}
