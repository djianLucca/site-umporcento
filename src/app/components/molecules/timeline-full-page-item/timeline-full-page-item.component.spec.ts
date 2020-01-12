import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineFullPageItemComponent } from './timeline-full-page-item.component';

describe('TimelineFullPageItemComponent', () => {
  let component: TimelineFullPageItemComponent;
  let fixture: ComponentFixture<TimelineFullPageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineFullPageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineFullPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
