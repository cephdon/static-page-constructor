import * as AWS from "aws-sdk/global";
import * as STS from "aws-sdk/clients/sts";

import { Injectable } from '@angular/core';

import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

import { CognitoService } from './cognito.service';

import { environment } from "../../environments/environment";

@Injectable()
export class ChangePasswordService {

	constructor(private cognitoService: CognitoService) { }

	newPassword(email: string, existingPassword: string, newPassword: string): Promise<any> {
		let authenticationData = {
			Username: email,
			Password: existingPassword,
		};

		let authenticationDetails = new AuthenticationDetails(authenticationData);

		let userData = {
			Username: email,
			Pool: this.cognitoService.getUserPool()
		};

		let cognitoUser = new CognitoUser(userData);

		return new Promise((resolve, reject) => {
			cognitoUser.authenticateUser(authenticationDetails, {
				newPasswordRequired: function(userAttributes, requiredAttributes) {
					// User was signed up by an admin and must provide new
					// password and required attributes, if any, to complete
					// authentication.

					// the api doesn't accept this field back
					delete userAttributes.email_verified;
					cognitoUser.completeNewPasswordChallenge(newPassword, requiredAttributes, {
						onSuccess: function(result) {
							resolve(userAttributes);
						},
						onFailure: function(err) {
							reject(err);
						}
					});
				},
				onSuccess: function(result) {
					resolve(result);
				},
				onFailure: function(err) {
					reject(err);
				}
			});
		});
	}

}
