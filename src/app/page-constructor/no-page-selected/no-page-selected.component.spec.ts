import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageSelectedComponent } from './no-page-selected.component';

describe('NoPageSelectedComponent', () => {
  let component: NoPageSelectedComponent;
  let fixture: ComponentFixture<NoPageSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPageSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPageSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
