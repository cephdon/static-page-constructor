import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginService } from './../../core/login.service';
import { MenuService } from './../../core/menu.service';

import { environment } from "../../../environments/environment";

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
	public isAuthenticated: boolean = false;
	
	public siteUrl: string = environment.siteRoot;

	public menus: any[] = [];

	private subscription: any;

	constructor(private loginService: LoginService,
				private menuService: MenuService) { }

	ngOnInit() {
		this.menus = MenuService.MENUS;

		this.subscription = this.loginService.isAuthenticated.subscribe(is => {
			this.isAuthenticated = is;
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
