import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { StaticFilesService, File } from '../core/static-files.service';

@Component({
	selector: 'app-static-files',
	templateUrl: './static-files.component.html',
	styleUrls: ['./static-files.component.css']
})
export class StaticFilesComponent implements OnInit, OnDestroy {
	public files: any[] = [];
	public accept: string[];

	private subscription: any;

	@Input() selectFileMode = false;

	@Output() fileSelected = new EventEmitter<File>();

	constructor(private staticFilesService: StaticFilesService) { 
		this.accept = File.ALL;
		this.staticFilesService.loadStaticFiles();
	}

	ngOnInit() {
		this.subscription = this.staticFilesService.staticfiles().subscribe(files => {
			this.files = files;
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	onFileUploadChange(event) {
		const files = event.srcElement.files;
		this.staticFilesService.upload(files);
	}

	onFileSelected(file) {
		this.fileSelected.emit(file);
	}

}
