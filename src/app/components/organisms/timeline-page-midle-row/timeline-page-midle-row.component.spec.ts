import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePageMidleRowComponent } from './timeline-page-midle-row.component';

describe('TimelinePageMidleRowComponent', () => {
  let component: TimelinePageMidleRowComponent;
  let fixture: ComponentFixture<TimelinePageMidleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinePageMidleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinePageMidleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
