import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineMenuIconComponent } from './timeline-menu-icon.component';

describe('TimelineMenuIconComponent', () => {
  let component: TimelineMenuIconComponent;
  let fixture: ComponentFixture<TimelineMenuIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineMenuIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineMenuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
