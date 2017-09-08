import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { LoginService } from '../../core/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public form: FormGroup;

	constructor(private loginService: LoginService,
				private router: Router) { }

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

		this.loginService.authenticate(this.form.value.email, this.form.value.password).then(() => {
			this.router.navigate(['/']);
		}).catch((err: string) => {
			if (err === this.loginService.NEW_PASSWORD_REQUIRED) {
				this.router.navigate(['/set-password']);
			}
		})
	}

}
