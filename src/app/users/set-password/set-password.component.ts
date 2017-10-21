import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { ChangePasswordService } from '../../core/change-password.service';

import { ShakeButtonDirective } from './../../shared/shake-button.directive';

@Component({
	selector: 'app-set-password',
	templateUrl: './set-password.component.html',
	styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
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

		this.submitting = true;

		this.changePasswordService.newPassword(
			this.form.value.username,
			this.form.value.temppassword,
			this.form.value.newpassword,
		).then(() => {
			this.router.navigate(['/']);
		}, () => {
			this.submitting = false;
			this.shakeButton.shake();
		});
	}

}
