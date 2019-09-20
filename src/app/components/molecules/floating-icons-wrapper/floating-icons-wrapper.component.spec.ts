import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingIconsWrapperComponent } from './floating-icons-wrapper.component';

describe('FloatingIconsWrapperComponent', () => {
  let component: FloatingIconsWrapperComponent;
  let fixture: ComponentFixture<FloatingIconsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingIconsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingIconsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
