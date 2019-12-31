import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampSliderItemsComponent } from './stamp-slider-items.component';

describe('StampSliderItemsComponent', () => {
  let component: StampSliderItemsComponent;
  let fixture: ComponentFixture<StampSliderItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampSliderItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampSliderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
