import { Component, OnInit, OnDestroy } from '@angular/core';

import { MenuService } from './../../../core/menu.service';

@Component({
	selector: 'app-active-menu',
	templateUrl: './active-menu.component.html',
	styleUrls: ['./active-menu.component.css']
})
export class ActiveMenuComponent implements OnInit, OnDestroy {
	public activeMenu: any;

	private subscription: any;

	constructor(private menuService: MenuService) { }

	ngOnInit() {
		this.subscription = this.menuService.activeMenu.subscribe(menu => {
			this.activeMenu = menu;
		})
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
