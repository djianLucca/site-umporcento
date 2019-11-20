import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSimplePersonImageTextComponent } from './timeline-simple-person-image-text.component';

describe('TimelineSimplePersonImageTextComponent', () => {
  let component: TimelineSimplePersonImageTextComponent;
  let fixture: ComponentFixture<TimelineSimplePersonImageTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineSimplePersonImageTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineSimplePersonImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
