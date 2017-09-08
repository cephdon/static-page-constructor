import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from './core/login.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private loginService: LoginService,
				private router: Router,
				private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.loginService.isAuthenticated.subscribe(isAuthenticated => {
			if (!isAuthenticated && 
				this.router.url !== '/login' && 
				this.router.url !== '/logout' &&
				this.router.url !== '/set-password') {
				this.router.navigate(['/login']);
			}
		});
	}
}
