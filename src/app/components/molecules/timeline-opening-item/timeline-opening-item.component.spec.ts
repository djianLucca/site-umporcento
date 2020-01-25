import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineOpeningItemComponent } from './timeline-opening-item.component';

describe('TimelineOpeningItemComponent', () => {
  let component: TimelineOpeningItemComponent;
  let fixture: ComponentFixture<TimelineOpeningItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineOpeningItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineOpeningItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
