import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileControlComponent } from './file-control.component';

describe('FileControlComponent', () => {
  let component: FileControlComponent;
  let fixture: ComponentFixture<FileControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
