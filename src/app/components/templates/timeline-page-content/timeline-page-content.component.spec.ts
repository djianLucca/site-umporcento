import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePageContentComponent } from './timeline-page-content.component';

describe('TimelinePageContentComponent', () => {
  let component: TimelinePageContentComponent;
  let fixture: ComponentFixture<TimelinePageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinePageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinePageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
