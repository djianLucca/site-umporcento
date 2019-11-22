import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineGaleryItemComponent } from './timeline-galery-item.component';

describe('TimelineGaleryItemComponent', () => {
  let component: TimelineGaleryItemComponent;
  let fixture: ComponentFixture<TimelineGaleryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineGaleryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineGaleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
