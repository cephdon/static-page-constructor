import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBoxComponent } from './file-box.component';

describe('FileBoxComponent', () => {
  let component: FileBoxComponent;
  let fixture: ComponentFixture<FileBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
