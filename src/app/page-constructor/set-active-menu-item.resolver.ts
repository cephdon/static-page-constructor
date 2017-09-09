import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { MenuService } from './../core/menu.service';

@Injectable()
export class SetActiveMenuItemResolve implements Resolve<void> {

	constructor(private menuService: MenuService) { }

	resolve(route: ActivatedRouteSnapshot) {
		this.menuService.activatePageConstructor();
	}
}
