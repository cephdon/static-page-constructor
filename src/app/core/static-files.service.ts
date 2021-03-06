import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { UiActivityIndicatorService } from './../shared/ui-activity-indicator.service';

import { S3Service } from './s3.service';

import { File } from './file';

import { environment } from "../../environments/environment";

@Injectable()
class StaticFilesService {
	private _staticFilesSubject: BehaviorSubject<File[]>;
	private _staticFiles: File[] = [];

	constructor(private s3Service: S3Service,
				private uiActivityIndicatorService: UiActivityIndicatorService) {
		this._staticFilesSubject = <BehaviorSubject<File[]>>new BehaviorSubject([]);
	}

	public staticfiles(): Observable<File[]> {
		return this._staticFilesSubject.asObservable();
	}

	public filter(opts) {
		let newFiles = this._staticFiles

		if (opts.control) {
			newFiles = this._staticFiles.filter(file => {
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
			});
		}

		if (opts.term) {
			newFiles = this._staticFiles.filter(file => {
				return file.name.toLowerCase().indexOf(opts.term.toLowerCase()) > -1;
			});
		}

		this._staticFilesSubject.next(newFiles);
	}

	public loadStaticFiles() {
		this.uiActivityIndicatorService.start();

		this.s3Service.listStaticFiles().then((data) => {
			return data.Contents.filter(f => !!f.Size);
		}).then(files => files.map(fileObj => {
				const file = new File();
				file.name = fileObj.Key.split('/').pop();
				file.url = `${environment.staticFilesRoot}/${fileObj.Key}`;
				file.lastModified = fileObj.LastModified;

				return file;
			})
		).then(files => {
			this._staticFiles = files;
			this._staticFilesSubject.next(files);
		}).then(x => {
			this.uiActivityIndicatorService.done();
			return x;
		}, x => {
			this.uiActivityIndicatorService.done();
			throw x;
		});
	}

	public upload(files: any[]|any): Promise<any> {
		files = Array.prototype.slice.call(files);

		return Promise.all(files.map(file => this.s3Service.upload(file))).then(() => {
			this.loadStaticFiles();
		});
	}

}

export {
	File,
	StaticFilesService
}