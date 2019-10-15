import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativePageMidleRowComponent } from './informative-page-midle-row.component';

describe('InformativePageMidleRowComponent', () => {
  let component: InformativePageMidleRowComponent;
  let fixture: ComponentFixture<InformativePageMidleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformativePageMidleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativePageMidleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
