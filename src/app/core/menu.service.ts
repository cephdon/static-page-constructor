import { Injectable } from '@angular/core';

import { ReplaySubject, Observable } from 'rxjs';

@Injectable()
export class MenuService {
	static MENUS = [
		{
			url: '/static-files',
			name: 'Static Files'
		},
		{
			url: '/page-constructor',
			name: 'Page Constructor'
		}
	]

	private activeMenuSubject = new ReplaySubject<any>();
	public activeMenu = this.activeMenuSubject.asObservable();

	constructor() { }

	setWindowTitle(title: string) {
		document.title = title;
	}

	activatePageConstructor() {
		this.activeMenuSubject.next(MenuService.MENUS[1]);
	}

	activateStaticFiles() {
		this.activeMenuSubject.next(MenuService.MENUS[0]);	
	}

}
