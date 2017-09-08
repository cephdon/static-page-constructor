import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { StaticFileModalContentComponent } from './static-file-modal-content/static-file-modal-content.component';
import { PageModalContentComponent } from './page-modal-content/page-modal-content.component';

@Component({
	selector: 'app-prop-type-link',
	templateUrl: './prop-type-link.component.html',
	styleUrls: ['./prop-type-link.component.css']
})
export class PropTypeLinkComponent implements OnInit {
	@Input() prop: any;
	@Input() formGroup: any;

	constructor(private modalService: NgbModal) { }

	ngOnInit() {
	}

	public openStaticFileWindow() {
		const ref = this.modalService.open(StaticFileModalContentComponent, {
			size: 'lg'
		});

		ref.result.then((url: string) => {
			this.formGroup.patchValue({
				[this.prop.key]: url
			});
		}).catch(() => {});
	}

	public openPageWindow() {
		const ref = this.modalService.open(PageModalContentComponent);

		ref.result.then((url: string) => {
			this.formGroup.patchValue({
				[this.prop.key]: url
			});
		}).catch(() => {});
	}

}
