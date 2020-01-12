import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSearchBarComponent } from './timeline-search-bar.component';

describe('TimelineSearchBarComponent', () => {
  let component: TimelineSearchBarComponent;
  let fixture: ComponentFixture<TimelineSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
