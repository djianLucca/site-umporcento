import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshTimelineBtnComponent } from './refresh-timeline-btn.component';

describe('RefreshTimelineBtnComponent', () => {
  let component: RefreshTimelineBtnComponent;
  let fixture: ComponentFixture<RefreshTimelineBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshTimelineBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshTimelineBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
