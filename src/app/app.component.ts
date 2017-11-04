import { Component, OnInit } from '@angular/core';

import { LoginService } from './core/login.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private loginService: LoginService) {}

	ngOnInit() {
		this.loginService.getAuthentionStatus();
	}
}
