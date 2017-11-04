import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

import { CognitoService } from './cognito.service';

import { environment } from "../../environments/environment";

@Injectable()
export class UserProfileService {

	constructor(private cognitoService: CognitoService,
				private router: Router) { }

	public getProfile(): Promise<any> {
		let cognitoUser = this.cognitoService.getCurrentUser();

		if (cognitoUser == null) {
			return Promise.reject(null);
		} else {
			return new Promise((resolve, reject) => {
				cognitoUser.getSession((err, session) => {
					if (err) {
						reject(err);
					} else {
						cognitoUser.getUserAttributes((err: any, result) => {
							if (err) {
								if (err.code === 'PasswordResetRequiredException') {
									this.router.navigate(['/reset-password']);
								}

								reject(err);
							} else {
								resolve(result.reduce((acc, attr) => {
									acc[attr.getName()] = attr.getValue();
									return acc;
								}, {}))
							}
						});
					}
				});
			});
		}
	}

}
