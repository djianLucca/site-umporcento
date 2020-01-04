import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabArtSliderComponent } from './colab-art-slider.component';

describe('ColabArtSliderComponent', () => {
  let component: ColabArtSliderComponent;
  let fixture: ComponentFixture<ColabArtSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColabArtSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColabArtSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
