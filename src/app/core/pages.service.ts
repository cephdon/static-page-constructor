import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { ReplaySubject, Subject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Page } from './page';
import { WidgetConfiguration } from './widget';

@Injectable()
class PagesService {
	private widgetConfigurationRemoved = new Subject<WidgetConfiguration>();
	private pageEdited = new Subject<Page>();

	private _pages: Page[];
	private pagesSubject = new ReplaySubject<Page[]>();

	public pages = this.pagesSubject.asObservable();

	widgetConfigurationRemoved$ = this.widgetConfigurationRemoved.asObservable();	
	pageEdited$ = this.pageEdited.asObservable();	

	constructor(private httpClient: HttpClient) { }

	loadPages(): Promise<Page[]> {
		return this.httpClient.get<Page[]>('/ListPages').toPromise()
			.then(pages => pages.map(page => new Page(page)))
			.then(pages => {
				this._pages = pages;
				this.pagesSubject.next(this._pages);
				return pages;
			});
	}

	getPage(slug: string): Promise<Page> {
		return this.httpClient.get<Page>(`/GetPage?slug=${slug}`).toPromise()
			.then(page => new Page(page));
	}

	save(page: Page): Promise<Page> {
		return this.httpClient.post(`/SavePage`, page).toPromise().then((page: Page) => {
			this.pageEdited.next(page);
			this.loadPages();
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

export {
	Page,
	PagesService,
}