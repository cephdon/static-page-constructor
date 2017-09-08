import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { StaticFilesService } from '../../core/static-files.service';

@Component({
	selector: 'app-file-control',
	templateUrl: './file-control.component.html',
	styleUrls: ['./file-control.component.css']
})
export class FileControlComponent implements OnInit {
	@Input() activeControl: string = 'Ale';

	@Output() control = new EventEmitter<string>();

	public controls: string[] = [
		'Ale',
		'Documents',
		'Audio',
		'Video',
		'Images',
	];

	constructor(private staticFilesService: StaticFilesService) { 
	}

	ngOnInit() {
	}

	public activateControl(control: string) {
		this.activeControl = control;

		this.staticFilesService.filter({control: this.activeControl});

		this.control.emit(this.activeControl);
	}
}
