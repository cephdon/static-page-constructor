import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-modal-content',
  templateUrl: './page-modal-content.component.html',
  styleUrls: ['./page-modal-content.component.css']
})
export class PageModalContentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
