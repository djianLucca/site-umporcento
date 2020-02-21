import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContentWrapperComponent } from './menu-content-wrapper.component';

describe('MenuContentWrapperComponent', () => {
  let component: MenuContentWrapperComponent;
  let fixture: ComponentFixture<MenuContentWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuContentWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuContentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
