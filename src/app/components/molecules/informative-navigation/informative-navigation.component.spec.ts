import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativeNavigationComponent } from './informative-navigation.component';

describe('InformativeNavigationComponent', () => {
  let component: InformativeNavigationComponent;
  let fixture: ComponentFixture<InformativeNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformativeNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
