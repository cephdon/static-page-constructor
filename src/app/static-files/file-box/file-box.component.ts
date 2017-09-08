import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { File } from '../../core/static-files.service';

@Component({
	selector: 'app-file-box',
	templateUrl: './file-box.component.html',
	styleUrls: ['./file-box.component.css']
})
export class FileBoxComponent implements OnInit {
	@Input() file: File;

	@Input() selectFileMode = false;

	@Output() fileSelected = new EventEmitter<File>();

	constructor() { }

	ngOnInit() {
	}

	onClick() {
		if (this.selectFileMode) {
			this.fileSelected.emit(this.file);
			return false;
		} else {
			return true;
		}
	}

}
