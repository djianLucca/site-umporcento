import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineGroupSealComponent } from './timeline-group-seal.component';

describe('TimelineGroupSealComponent', () => {
  let component: TimelineGroupSealComponent;
  let fixture: ComponentFixture<TimelineGroupSealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineGroupSealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineGroupSealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
