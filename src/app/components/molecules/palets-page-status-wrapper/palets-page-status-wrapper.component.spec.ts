import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletsPageStatusWrapperComponent } from './palets-page-status-wrapper.component';

describe('PaletsPageStatusWrapperComponent', () => {
  let component: PaletsPageStatusWrapperComponent;
  let fixture: ComponentFixture<PaletsPageStatusWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaletsPageStatusWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletsPageStatusWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
