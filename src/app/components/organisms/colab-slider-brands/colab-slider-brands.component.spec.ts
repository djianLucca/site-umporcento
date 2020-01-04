import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabSliderBrandsComponent } from './colab-slider-brands.component';

describe('ColabSliderBrandsComponent', () => {
  let component: ColabSliderBrandsComponent;
  let fixture: ComponentFixture<ColabSliderBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColabSliderBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColabSliderBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
