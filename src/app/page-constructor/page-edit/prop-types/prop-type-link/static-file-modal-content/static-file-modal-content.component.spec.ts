import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticFileModalContentComponent } from './static-file-modal-content.component';

describe('StaticFileModalContentComponent', () => {
  let component: StaticFileModalContentComponent;
  let fixture: ComponentFixture<StaticFileModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticFileModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticFileModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
