import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksSliderImagesComponent } from './talks-slider-images.component';

describe('TalksSliderImagesComponent', () => {
  let component: TalksSliderImagesComponent;
  let fixture: ComponentFixture<TalksSliderImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksSliderImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksSliderImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
