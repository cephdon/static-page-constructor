import { Injectable } from '@angular/core';

import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

import { CognitoService } from './cognito.service';

import { environment } from "../../environments/environment";

@Injectable()
export class UserProfileService {

	constructor(private cognitoService: CognitoService) { }

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
						cognitoUser.getUserAttributes((err, result) => {
							err ? reject(err) : resolve(result.reduce((acc, attr) => {
								acc[attr.getName()] = attr.getValue();
								return acc;
							}, {}));
						});
					}
				});
			});
		}
	}

}
