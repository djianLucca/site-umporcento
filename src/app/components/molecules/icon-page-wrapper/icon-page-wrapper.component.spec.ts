import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPageWrapperComponent } from './icon-page-wrapper.component';

describe('IconPageWrapperComponent', () => {
  let component: IconPageWrapperComponent;
  let fixture: ComponentFixture<IconPageWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconPageWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
