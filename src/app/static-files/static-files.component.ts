import { Component, OnInit, OnDestroy } from '@angular/core';

import { StaticFilesService } from '../core/static-files.service';

@Component({
	selector: 'app-static-files',
	templateUrl: './static-files.component.html',
	styleUrls: ['./static-files.component.css']
})
export class StaticFilesComponent implements OnInit, OnDestroy {
	public files: any[] = [];

	private subscription: any;

	constructor(private staticFilesService: StaticFilesService) { }

	ngOnInit() {
		this.staticFilesService.loadStaticFiles()

		this.subscription = this.staticFilesService.staticfiles().subscribe(files => {
			this.files = files;
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
