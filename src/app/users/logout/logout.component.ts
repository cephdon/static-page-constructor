import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../core/login.service';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

	constructor(private loginService: LoginService) { }

	ngOnInit() {
		this.loginService.logout();
	}

}
