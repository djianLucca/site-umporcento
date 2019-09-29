import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativeTextWrapperComponent } from './informative-text-wrapper.component';

describe('InformativeTextWrapperComponent', () => {
  let component: InformativeTextWrapperComponent;
  let fixture: ComponentFixture<InformativeTextWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformativeTextWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativeTextWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
