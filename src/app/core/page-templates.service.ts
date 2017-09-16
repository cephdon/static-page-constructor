import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { ReplaySubject, Subject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { PageTemplate } from './page';

@Injectable()
class PageTemplatesService {

	private _pageTemplates: PageTemplate[];
	private _pageTemplatesSubject = new ReplaySubject<PageTemplate[]>();

	public pageTemplates = this._pageTemplatesSubject.asObservable();

	constructor(private httpClient: HttpClient) { }

	loadPageTemplates(): Promise<PageTemplate[]> {
		return this.httpClient.get<PageTemplate[]>('/ListPageTemplates').toPromise()
			.then(templates => templates.map(template => new PageTemplate(template)))
			.then(templates => {
				this._pageTemplates = templates;
				this._pageTemplatesSubject.next(this._pageTemplates);
				return templates;
			});
	}

	getPageTemplate(slug: string): Promise<PageTemplate> {
		return this.httpClient.get<PageTemplate>(`/GetPageTemplate?slug=${slug}`).toPromise()
			.then(pt => new PageTemplate(pt));
	}

}

export {
	PageTemplate,
	PageTemplatesService
}