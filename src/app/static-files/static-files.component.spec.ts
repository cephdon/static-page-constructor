import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticFilesComponent } from './static-files.component';

describe('StaticFilesComponent', () => {
  let component: StaticFilesComponent;
  let fixture: ComponentFixture<StaticFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
