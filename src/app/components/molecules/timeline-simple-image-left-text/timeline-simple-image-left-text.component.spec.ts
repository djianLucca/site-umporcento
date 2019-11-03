import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSimpleImageLeftTextComponent } from './timeline-simple-image-left-text.component';

describe('TimelineSimpleImageLeftTextComponent', () => {
  let component: TimelineSimpleImageLeftTextComponent;
  let fixture: ComponentFixture<TimelineSimpleImageLeftTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineSimpleImageLeftTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineSimpleImageLeftTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
