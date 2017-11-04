import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { ChangePasswordService } from '../../core/change-password.service';

import { ShakeButtonDirective } from './../../shared/shake-button.directive';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
	@ViewChild(ShakeButtonDirective) shakeButton: ShakeButtonDirective;

	public form: FormGroup;

	public submitting: boolean = false;

	constructor(private changePasswordService: ChangePasswordService,
				private router: Router) { }

	ngOnInit() {
		this.form = new FormGroup({});

		this.form.addControl('username', new FormControl('', [
			Validators.required,
		]));

		this.form.addControl('code', new FormControl('', [
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

		this.submitting = true;

		this.changePasswordService.resetPassword(
			this.form.value.username,
			this.form.value.code,
			this.form.value.newpassword,
		).then(() => {
			this.router.navigate(['/']);
		}, () => {
			this.submitting = false;
			this.shakeButton.shake();
		});
	}
}
