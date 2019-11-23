import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineGroupGalerySectionComponent } from './timeline-group-galery-section.component';

describe('TimelineGroupGalerySectionComponent', () => {
  let component: TimelineGroupGalerySectionComponent;
  let fixture: ComponentFixture<TimelineGroupGalerySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineGroupGalerySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineGroupGalerySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
