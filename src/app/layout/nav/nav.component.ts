import { Component, OnInit } from '@angular/core';

import { UserProfileService } from './../../core/user-profile.service';
import { LoginService } from './../../core/login.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	public email: string;
	public isAuthenticated: boolean = false;

	constructor(private userProfileService: UserProfileService,
				private loginService: LoginService) { }

	ngOnInit() {
		return this.loginService.isAuthenticated().then(is => {
			this.isAuthenticated = is;

			if (this.isAuthenticated) {
				this.userProfileService.getProfile().then(attrs => {
					this.email = attrs.email;
				}).catch(() => {
				});
			}
		}).catch(() => {
		});
	}
}
