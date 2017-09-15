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

		//todo: make it more optimal
		const inner = (configuration: any[]) => {
			configuration.forEach((c, i) => {
				if (c.id === widgetConfiguration.id) {
					configuration.splice(i, 1);

					return false;
				} else if (c.areas) {
					Object.keys(c.areas).forEach(key => {
						inner(c.areas[key]);
					});
				}
			});
		};

		inner(page.configuration);

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