import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampImageSliderComponent } from './stamp-image-slider.component';

describe('StampImageSliderComponent', () => {
  let component: StampImageSliderComponent;
  let fixture: ComponentFixture<StampImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
