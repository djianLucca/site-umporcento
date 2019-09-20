import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPageBottomRowComponent } from './icon-page-bottom-row.component';

describe('IconPageBottomRowComponent', () => {
  let component: IconPageBottomRowComponent;
  let fixture: ComponentFixture<IconPageBottomRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconPageBottomRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPageBottomRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
