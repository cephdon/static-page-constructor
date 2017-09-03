import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { HttpClient } from '@angular/common/http';

import { Page } from './page';
import { WidgetConfiguration } from './widget';

@Injectable()
class PagesService {
	private widgetConfigurationRemoved = new Subject<WidgetConfiguration>();
	private pageEdited = new Subject<Page>();

	widgetConfigurationRemoved$ = this.widgetConfigurationRemoved.asObservable();	
	pageEdited$ = this.pageEdited.asObservable();	

	constructor(private httpClient: HttpClient) { }

	getPages(): Promise<Page[]> {
		return this.httpClient.get<Page[]>('/ListPages').toPromise()
			.then(pages => pages.map(page => new Page(page)));
	}

	getPage(slug: string): Promise<Page> {
		return this.httpClient.get<Page>(`/GetPage?slug=${slug}`).toPromise()
			.then(page => new Page(page));
	}

	save(page: Page): Promise<any> {
		return this.httpClient.post(`/SavePage`, page).toPromise().then((page: Page) => {
			this.pageEdited.next(page);
			return page;
		})
	}

	publish({slug}: Page): Promise<Page> {
		return this.httpClient.get(`/PublishPage?slug=${slug}`).toPromise();
	}

	removeWidget(page: Page, widgetConfiguration: WidgetConfiguration) {
		page.configuration = page.configuration
			.filter(c => c.id !== widgetConfiguration.id);

		this.widgetConfigurationRemoved.next(widgetConfiguration);
	}

	removePage(page: Page): Promise<void> {
		return Promise.resolve();
	}
}

@Injectable()
class CurrentPageService {
	_page: Page;

	constructor() { }

	public get page() : Page {
		return this._page;
	}

	public set page(v : Page) {
		this.page = v;
	}
}

export {
	Page,
	PagesService,
	CurrentPageService
}