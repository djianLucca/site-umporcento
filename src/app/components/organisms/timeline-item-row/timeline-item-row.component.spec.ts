import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineItemRowComponent } from './timeline-item-row.component';

describe('TimelineItemRowComponent', () => {
  let component: TimelineItemRowComponent;
  let fixture: ComponentFixture<TimelineItemRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineItemRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
