import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabBrandingSliderItemComponent } from './colab-branding-slider-item.component';

describe('ColabBrandingSliderItemComponent', () => {
  let component: ColabBrandingSliderItemComponent;
  let fixture: ComponentFixture<ColabBrandingSliderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColabBrandingSliderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColabBrandingSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
