import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMidleRowComponent } from './menu-midle-row.component';

describe('MenuMidleRowComponent', () => {
  let component: MenuMidleRowComponent;
  let fixture: ComponentFixture<MenuMidleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMidleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMidleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
