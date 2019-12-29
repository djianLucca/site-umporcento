import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsPageMidleRowComponent } from './us-page-midle-row.component';

describe('UsPageMidleRowComponent', () => {
  let component: UsPageMidleRowComponent;
  let fixture: ComponentFixture<UsPageMidleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsPageMidleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsPageMidleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
