import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPageMidleRowComponent } from './icon-page-midle-row.component';

describe('IconPageMidleRowComponent', () => {
  let component: IconPageMidleRowComponent;
  let fixture: ComponentFixture<IconPageMidleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconPageMidleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPageMidleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
