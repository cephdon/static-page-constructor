import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { S3Service } from './s3.service';

import { environment } from "../../environments/environment";

@Injectable()
export class StaticFilesService {
	private _staticFilesSubject: BehaviorSubject<any[]>;
	private _staticFiles: any[] = [];

	constructor(private s3Service: S3Service) {
		this._staticFilesSubject = <BehaviorSubject<any[]>>new BehaviorSubject([]);
	}

	public staticfiles(): Observable<any[]> {
		return this._staticFilesSubject.asObservable();
	}

	public filter(opts) {
		this._staticFilesSubject.next(this._staticFiles.filter(file => {
			switch(opts.control) {
				case 'Documents': {
					return file.Ext == 'doc' || file.Ext == 'docx' || file.Ext == 'xls' || file.Ext == 'pdf';
				}
				case 'Audio': {
					return file.Ext == 'mp3';
				}
				case 'Images': {
					return file.Ext == 'jpg' || file.Ext == 'png' || file.Ext == 'gif'; ;
				}
				default: {
					return true;
				}
			}
		}));
	}

	public loadStaticFiles() {
		this.s3Service.listStaticFiles().then(files => files.map(file => {
				file.Url = `${environment.staticFilesRoot}/${file.Key}`
				file.Name = file.Key.split('/').pop();
				file.Ext = file.Key.split('.').pop();

				return file;
			})
		).then(files => {
			this._staticFiles = files;
			this._staticFilesSubject.next(files);
		});
	}

}
