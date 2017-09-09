import 'rxjs/add/operator/do';

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

import { UiActivityIndicatorService } from './ui-activity-indicator.service';

@Injectable()
export class SPCInterceptor implements HttpInterceptor {

	constructor(private uiActivityIndicatorService: UiActivityIndicatorService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const dupReq = req.clone({
			url: `${environment.apiRoot}${req.url}`,
			setHeaders: {
				'x-api-key': environment.apiKey
			}
		});

		this.uiActivityIndicatorService.start();

		return next.handle(dupReq).do(event => {
			if (event instanceof HttpResponse) {
				this.uiActivityIndicatorService.done();
			}
		});
	}
}