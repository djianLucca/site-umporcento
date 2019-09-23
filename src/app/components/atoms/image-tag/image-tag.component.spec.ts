import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTagComponent } from './image-tag.component';

describe('ImageTagComponent', () => {
  let component: ImageTagComponent;
  let fixture: ComponentFixture<ImageTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
