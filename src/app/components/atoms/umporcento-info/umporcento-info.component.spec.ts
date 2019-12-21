import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmporcentoInfoComponent } from './umporcento-info.component';

describe('UmporcentoInfoComponent', () => {
  let component: UmporcentoInfoComponent;
  let fixture: ComponentFixture<UmporcentoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmporcentoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmporcentoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
