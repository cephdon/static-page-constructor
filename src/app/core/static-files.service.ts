import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { S3Service } from './s3.service';

import { File } from './file';

import { environment } from "../../environments/environment";

@Injectable()
export class StaticFilesService {
	private _staticFilesSubject: BehaviorSubject<File[]>;
	private _staticFiles: File[] = [];

	constructor(private s3Service: S3Service) {
		this._staticFilesSubject = <BehaviorSubject<File[]>>new BehaviorSubject([]);
	}

	public staticfiles(): Observable<File[]> {
		return this._staticFilesSubject.asObservable();
	}

	public filter(opts) {
		this._staticFilesSubject.next(this._staticFiles.filter(file => {
			switch(opts.control) {
				case 'Documents': {
					return file.isDocument();
				}
				case 'Audio': {
					return file.isAudio();
				}
				case 'Video': {
					return file.isVideo();
				}
				case 'Images': {
					return file.isImage();
				}
				default: {
					return true;
				}
			}
		}));
	}

	public loadStaticFiles() {
		this.s3Service.listStaticFiles().then(files => files.map(fileObj => {
				const file = new File();
				file.name = fileObj.Key.split('/').pop();
				file.url = `${environment.staticFilesRoot}/${fileObj.Key}`;
				file.lastModified = fileObj.LastModified;

				return file;
			})
		).then(files => {
			this._staticFiles = files;
			this._staticFilesSubject.next(files);
		});
	}

}
