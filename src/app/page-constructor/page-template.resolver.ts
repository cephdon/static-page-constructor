import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PageTemplate, PageTemplatesService } from './../core/page-templates.service';

@Injectable()
export class PageTemplateResolve implements Resolve<PageTemplate> {

	constructor(private pageTemplatesService: PageTemplatesService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.pageTemplatesService.getPageTemplate(route.params.id);
	}
}