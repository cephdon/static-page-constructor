import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Page, PagesService } from './../core/pages.service';

@Injectable()
export class PagesResolve implements Resolve<Page[]> {

	constructor(private pagesService: PagesService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.pagesService.loadPages();
	}
}