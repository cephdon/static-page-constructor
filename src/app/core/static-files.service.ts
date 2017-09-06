import { Injectable } from '@angular/core';

import { S3Service } from './s3.service';

import { environment } from "../../environments/environment";

@Injectable()
export class StaticFilesService {

	constructor(private s3Service: S3Service) { }

	public listStaticFiles(): Promise<any> {
		return this.s3Service.listStaticFiles().then(files => files.map(file => {
				file.Url = `${environment.staticFilesRoot}/${file.Key}`
				file.Name = file.Key.split('/').pop();
				file.Ext = file.Key.split('.').pop();

				return file;
			})
		);
	}

}
