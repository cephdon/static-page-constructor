import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-static-file-modal-content',
	templateUrl: './static-file-modal-content.component.html',
	styleUrls: ['./static-file-modal-content.component.css']
})
export class StaticFileModalContentComponent implements OnInit {

	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit() {
	}

	onFileSelected(file) {
		this.activeModal.close(file.url);
	}

}
