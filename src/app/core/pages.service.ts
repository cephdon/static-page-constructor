import { Injectable } from '@angular/core';

import { Page } from './page';

import { PAGES } from './pages-mock';

@Injectable()
class PagesService {

  constructor() { }

  getPages(): Promise<Page[]> {
  	return Promise.resolve(PAGES);
  }

}

export {
	Page,
	PagesService
}