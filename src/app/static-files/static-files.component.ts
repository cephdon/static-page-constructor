import { Component, OnInit } from '@angular/core';

import { StaticFilesService } from '../core/static-files.service';

@Component({
	selector: 'app-static-files',
	templateUrl: './static-files.component.html',
	styleUrls: ['./static-files.component.css']
})
export class StaticFilesComponent implements OnInit {
	public files: any[] = [];

	constructor(private staticFilesService: StaticFilesService) { }

	ngOnInit() {
		this.staticFilesService.listStaticFiles().then(files => {
			this.files = files;
		});
	}

}
