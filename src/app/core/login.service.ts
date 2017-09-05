import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

	constructor() { }

	public isAuthenticated(): Promise<boolean> {
		return Promise.resolve(false);
	}
}
