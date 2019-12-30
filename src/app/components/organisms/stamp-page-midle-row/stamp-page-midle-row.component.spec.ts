import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampPageMidleRowComponent } from './stamp-page-midle-row.component';

describe('StampPageMidleRowComponent', () => {
  let component: StampPageMidleRowComponent;
  let fixture: ComponentFixture<StampPageMidleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampPageMidleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampPageMidleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
