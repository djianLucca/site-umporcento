import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmporcentoMainLogoComponent } from './umporcento-main-logo.component';

describe('UmporcentoMainLogoComponent', () => {
  let component: UmporcentoMainLogoComponent;
  let fixture: ComponentFixture<UmporcentoMainLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmporcentoMainLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmporcentoMainLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
