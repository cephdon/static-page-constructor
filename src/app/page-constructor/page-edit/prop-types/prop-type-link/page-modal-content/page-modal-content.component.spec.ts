import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalContentComponent } from './page-modal-content.component';

describe('PageModalContentComponent', () => {
  let component: PageModalContentComponent;
  let fixture: ComponentFixture<PageModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
