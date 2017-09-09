import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserProfileService } from './../../../core/user-profile.service';
import { LoginService } from './../../../core/login.service';

@Component({
	selector: 'app-user-display-name',
	templateUrl: './user-display-name.component.html',
	styleUrls: ['./user-display-name.component.css']
})
export class UserDisplayNameComponent implements OnInit, OnDestroy {
	public email: string;

	private subscription: any;

	constructor(private userProfileService: UserProfileService,
				private loginService: LoginService) { }

	ngOnInit() {
		this.subscription = this.loginService.isAuthenticated.subscribe(isAuthenticated => {
			if (isAuthenticated) {
				this.userProfileService.getProfile().then(attrs => {
					this.email = attrs.email;
				});
			}
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
