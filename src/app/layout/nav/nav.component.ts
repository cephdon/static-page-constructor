import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserProfileService } from './../../core/user-profile.service';
import { LoginService } from './../../core/login.service';

import { environment } from "../../../environments/environment";

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
	public email: string;
	
	public isAuthenticated: boolean = false;
	
	public siteUrl: string = environment.siteRoot;

	private subscription: any;

	constructor(private userProfileService: UserProfileService,
				private loginService: LoginService) { }

	ngOnInit() {
		this.subscription = this.loginService.isAuthenticated.subscribe(is => {
			this.isAuthenticated = is;

			if (this.isAuthenticated) {
				this.userProfileService.getProfile().then(attrs => {
					this.email = attrs.email;
				});
			}
		})
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
