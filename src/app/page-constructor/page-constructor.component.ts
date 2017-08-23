import { Component, OnInit } from '@angular/core';

import { PagesService, Page } from './../core/pages.service';

@Component({
  selector: 'app-page-constructor',
  templateUrl: './page-constructor.component.html',
  styleUrls: ['./page-constructor.component.css']
})
export class PageConstructorComponent implements OnInit {
	pages: Page[];

  constructor(private pagesService: PagesService) { }

  getPages() {
  	this.pagesService.getPages().then(pages => this.pages = pages);
  }

  ngOnInit() {
  	this.getPages();
  }

}
