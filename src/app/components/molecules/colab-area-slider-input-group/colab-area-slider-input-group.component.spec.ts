import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabAreaSliderInputGroupComponent } from './colab-area-slider-input-group.component';

describe('ColabAreaSliderInputGroupComponent', () => {
  let component: ColabAreaSliderInputGroupComponent;
  let fixture: ComponentFixture<ColabAreaSliderInputGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColabAreaSliderInputGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColabAreaSliderInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
