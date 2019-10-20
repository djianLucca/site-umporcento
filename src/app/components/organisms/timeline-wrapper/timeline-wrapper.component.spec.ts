import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineWrapperComponent } from './timeline-wrapper.component';

describe('TimelineWrapperComponent', () => {
  let component: TimelineWrapperComponent;
  let fixture: ComponentFixture<TimelineWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
