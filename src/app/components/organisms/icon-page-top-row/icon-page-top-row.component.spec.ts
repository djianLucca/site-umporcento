import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPageTopRowComponent } from './icon-page-top-row.component';

describe('IconPageTopRowComponent', () => {
  let component: IconPageTopRowComponent;
  let fixture: ComponentFixture<IconPageTopRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconPageTopRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPageTopRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
