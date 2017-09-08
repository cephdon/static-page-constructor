import * as AWS from "aws-sdk/global";
import * as STS from "aws-sdk/clients/sts";

import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

import { CognitoService } from './cognito.service';

import { environment } from "../../environments/environment";

@Injectable()
export class LoginService {
	public NEW_PASSWORD_REQUIRED: string = 'NEW_PASSWORD_REQUIRED';

	private isAuthenticatedSubject = new BehaviorSubject<boolean>(true);

	public isAuthenticated = this.isAuthenticatedSubject.asObservable();

	constructor(private cognitoService: CognitoService) { 
		this.getAuthentionStatus()
	}

	public getAuthentionStatus() {
		return new Promise((resolve, reject) => {
			let cognitoUser = this.cognitoService.getCurrentUser();

			if (cognitoUser != null) {
				cognitoUser.getSession((err, session) => {
					if (err) {
						console.log("UserLoginService: Couldn't get the session: " + err, err.stack);
						resolve(false);
					}
					else {
						console.log("UserLoginService: Session is " + session.isValid());
						resolve(session.isValid());
					}
				});
			} else {
				resolve(false);
			}
		}).then((status: boolean) => {
			this.isAuthenticatedSubject.next(status);
			return status;
		}, (err) => {
			this.isAuthenticatedSubject.next(false);
			throw err;
		});
	}

	public logout() {
		const user = this.cognitoService.getCurrentUser();
		user && user.signOut();
		this.isAuthenticatedSubject.next(false);
	}

	public authenticate(username: string, password: string): Promise<any> {
		const authenticationData = {
			Username: username,
			Password: password,
		};

		const authenticationDetails = new AuthenticationDetails(authenticationData);

		const userData = {
			Username: username,
			Pool: this.cognitoService.getUserPool()
		};

		let cognitoUser = new CognitoUser(userData);

		return new Promise((resolve, reject) => {
			cognitoUser.authenticateUser(authenticationDetails, {
				newPasswordRequired: (userAttributes, requiredAttributes) => {
					reject(this.NEW_PASSWORD_REQUIRED);
				},
				onSuccess: (result) => {
					const creds = this.cognitoService.buildCognitoCreds(result.getIdToken().getJwtToken());

					AWS.config.credentials = creds;

					// So, when CognitoIdentity authenticates a user, it doesn't actually hand us the IdentityID,
					// used by many of our other handlers. This is handled by some sly underhanded calls to AWS Cognito
					// API's by the SDK itself, automatically when the first AWS SDK request is made that requires our
					// security credentials. The identity is then injected directly into the credentials object.
					// If the first SDK call we make wants to use our IdentityID, we have a
					// chicken and egg problem on our hands. We resolve this problem by "priming" the AWS SDK by calling a
					// very innocuous API call that forces this behavior.
					const clientParams: any = {};
					if (environment.sts_endpoint) {
						clientParams.endpoint = environment.sts_endpoint;
					}

					const sts = new STS(clientParams);

					sts.getCallerIdentity((err, data) => {
						resolve(result);
					});

				},
				onFailure: (err) => {
					reject(err.message);
				},
			});
		}).then(x => {
			this.isAuthenticatedSubject.next(true);
			return x;
		}, x => {
			this.isAuthenticatedSubject.next(false);
			throw x;
		});
	}
}
