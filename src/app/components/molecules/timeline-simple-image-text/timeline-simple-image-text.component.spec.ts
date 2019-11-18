import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSimpleImageTextComponent } from './timeline-simple-image-text.component';

describe('TimelineSimpleImageTextComponent', () => {
  let component: TimelineSimpleImageTextComponent;
  let fixture: ComponentFixture<TimelineSimpleImageTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineSimpleImageTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineSimpleImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
