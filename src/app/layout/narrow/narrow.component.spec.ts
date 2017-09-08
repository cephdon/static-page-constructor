import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrowComponent } from './narrow.component';

describe('NarrowComponent', () => {
  let component: NarrowComponent;
  let fixture: ComponentFixture<NarrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
