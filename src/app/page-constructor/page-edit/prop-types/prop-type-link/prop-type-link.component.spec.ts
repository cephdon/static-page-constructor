import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropTypeLinkComponent } from './prop-type-link.component';

describe('PropTypeLinkComponent', () => {
  let component: PropTypeLinkComponent;
  let fixture: ComponentFixture<PropTypeLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropTypeLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropTypeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
