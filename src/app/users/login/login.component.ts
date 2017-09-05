import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../../core/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public form: FormGroup;

	constructor(private loginService: LoginService) { }

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

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.loginService.authenticate(this.form.value.email, this.form.value.password);
	}

}
