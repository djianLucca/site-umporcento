import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletPageStatusComponent } from './palet-page-status.component';

describe('PaletPageStatusComponent', () => {
  let component: PaletPageStatusComponent;
  let fixture: ComponentFixture<PaletPageStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaletPageStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletPageStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
