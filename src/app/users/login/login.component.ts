import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { LoginService } from '../../core/login.service';

import { ShakeButtonDirective } from './../../shared/shake-button.directive';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	@ViewChild(ShakeButtonDirective) shakeButton: ShakeButtonDirective;

	public form: FormGroup;

	public submitting: boolean = false;

	constructor(private loginService: LoginService,
				private router: Router) { }

	ngOnInit() {
		this.form = new FormGroup({});

		this.form.addControl('username', new FormControl('', [
			Validators.required,
		]));

		this.form.addControl('password', new FormControl('', [
			Validators.required
		]));
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.submitting = true;

		this.loginService.authenticate(this.form.value.username, this.form.value.password).then(() => {
			this.router.navigate(['/']);
		}).catch((err: string) => {
			if (err === this.loginService.NEW_PASSWORD_REQUIRED) {
				this.router.navigate(['/set-password']);
			} else {
				this.submitting = false;
				this.shakeButton.shake();
			}
		})
	}

}
