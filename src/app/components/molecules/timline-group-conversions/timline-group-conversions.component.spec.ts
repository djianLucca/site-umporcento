import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimlineGroupConversionsComponent } from './timline-group-conversions.component';

describe('TimlineGroupConversionsComponent', () => {
  let component: TimlineGroupConversionsComponent;
  let fixture: ComponentFixture<TimlineGroupConversionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimlineGroupConversionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimlineGroupConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
