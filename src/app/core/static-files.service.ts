import { Injectable } from '@angular/core';

import { S3Service } from './s3.service';

@Injectable()
export class StaticFilesService {

	constructor(private s3Service: S3Service) { }

	public listStaticFiles(): Promise<any> {
		return this.s3Service.listStaticFiles().then(files => {
			debugger;
		})
	}

}
