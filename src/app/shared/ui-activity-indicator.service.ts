import { Injectable } from '@angular/core';

import { NgProgressService } from 'ngx-progressbar';

@Injectable()
export class UiActivityIndicatorService {

	constructor(private progressService: NgProgressService) { }

	public start() {
		return this.progressService.start();
	}

	public done() {
		return this.progressService.done();
	}

}
