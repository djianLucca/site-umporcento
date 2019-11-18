import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineItemIconsWrapperComponent } from './timeline-item-icons-wrapper.component';

describe('TimelineItemIconsWrapperComponent', () => {
  let component: TimelineItemIconsWrapperComponent;
  let fixture: ComponentFixture<TimelineItemIconsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineItemIconsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineItemIconsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
