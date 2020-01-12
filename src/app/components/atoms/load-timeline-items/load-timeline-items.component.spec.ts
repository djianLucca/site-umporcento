import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTimelineItemsComponent } from './load-timeline-items.component';

describe('LoadTimelineItemsComponent', () => {
  let component: LoadTimelineItemsComponent;
  let fixture: ComponentFixture<LoadTimelineItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadTimelineItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTimelineItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
