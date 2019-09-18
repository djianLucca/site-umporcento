import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTagComponent } from './svg-tag.component';

describe('SvgTagComponent', () => {
  let component: SvgTagComponent;
  let fixture: ComponentFixture<SvgTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
