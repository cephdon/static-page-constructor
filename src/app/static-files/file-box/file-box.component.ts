import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-file-box',
	templateUrl: './file-box.component.html',
	styleUrls: ['./file-box.component.css']
})
export class FileBoxComponent implements OnInit {
	@Input() file: any;

	constructor() { }

	ngOnInit() {
	}

}
