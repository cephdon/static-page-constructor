import 'rxjs/add/operator/do';

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Injectable()
export class SPCInterceptor implements HttpInterceptor {

	constructor(private slimLoadingBarService: SlimLoadingBarService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const dupReq = req.clone({
			url: `${environment.apiRoot}${req.url}`,
			setHeaders: {
				'x-api-key': environment.apiKey
			}
		});

		return next.handle(dupReq).do(event => {
			if (event instanceof HttpRequest) {
				this.slimLoadingBarService.start();
			} else if (event instanceof HttpResponse) {
				this.slimLoadingBarService.complete();
			}
		});
	}
}