import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCounterComponent } from './dropdown-counter.component';

describe('DropdownCounterComponent', () => {
  let component: DropdownCounterComponent;
  let fixture: ComponentFixture<DropdownCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
