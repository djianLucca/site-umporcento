import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSvgComponent } from './load-svg.component';

describe('LoadSvgComponent', () => {
  let component: LoadSvgComponent;
  let fixture: ComponentFixture<LoadSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
