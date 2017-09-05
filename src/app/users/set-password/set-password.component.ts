import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { ChangePasswordService } from '../../core/change-password.service';

@Component({
	selector: 'app-set-password',
	templateUrl: './set-password.component.html',
	styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

	public form: FormGroup;

	constructor(private changePasswordService: ChangePasswordService,
				private router: Router) { }

	ngOnInit() {
		this.form = new FormGroup({});

		this.form.addControl('email', new FormControl('', [
			Validators.required, 
			Validators.email
		]));

		this.form.addControl('temppassword', new FormControl('', [
			Validators.required
		]));

		this.form.addControl('newpassword', new FormControl('', [
			Validators.required
		]));
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.changePasswordService.newPassword(
			this.form.value.email,
			this.form.value.temppassword,
			this.form.value.newpassword,
		);
	}

}
