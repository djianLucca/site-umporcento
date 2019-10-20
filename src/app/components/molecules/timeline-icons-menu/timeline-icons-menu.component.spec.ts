import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineIconsMenuComponent } from './timeline-icons-menu.component';

describe('TimelineIconsMenuComponent', () => {
  let component: TimelineIconsMenuComponent;
  let fixture: ComponentFixture<TimelineIconsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineIconsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineIconsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
