import 'rxjs/add/operator/do';

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { NgProgressService } from 'ngx-progressbar';

import { environment } from './../../environments/environment';

@Injectable()
export class SPCInterceptor implements HttpInterceptor {

	constructor(public progressService: NgProgressService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const dupReq = req.clone({
			url: `${environment.apiRoot}${req.url}`,
			setHeaders: {
				'x-api-key': environment.apiKey
			}
		});

		this.progressService.start();

		return next.handle(dupReq).do(event => {
			if (event instanceof HttpResponse) {
				this.progressService.done();
			}
		});
	}
}