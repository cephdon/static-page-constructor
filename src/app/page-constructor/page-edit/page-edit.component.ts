import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Page, PagesService } from './../../core/pages.service';
import { AddWidgetModalContentComponent } from './add-widget-modal-content/add-widget-modal-content.component';
import { WidgetConfiguration } from './../../core/widgets.service';

@Component({
	selector: 'app-page-edit',
	templateUrl: './page-edit.component.html',
	styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit, OnDestroy {
	page: Page;

	view: string = 'structure';

	private subscription: Subscription;

	constructor(private activatedRoute: ActivatedRoute,
				private modalService: NgbModal,
				private pagesService: PagesService,
				private router: Router) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.page = data.page;
		});

		this.subscription = this.pagesService.widgetConfigurationRemoved$.subscribe((wc: WidgetConfiguration) => {
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	openCreateWidgetWindow() {
		const ref = this.modalService.open(AddWidgetModalContentComponent);

		ref.result.then((widgetConfiguration:WidgetConfiguration) => {
			this.page.configuration.push(widgetConfiguration);
		}).catch(() => {});
	}

	savePage() {
		this.pagesService.save(this.page);
	}

	publishPage() {
		this.pagesService.publish(this.page);
	}

	removePage() {
		this.pagesService.removePage(this.page).then(() => {
			this.router.navigate(['/page-constructor']);
		});
	}

}
