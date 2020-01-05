import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMenuContentComponent } from './open-menu-content.component';

describe('OpenMenuContentComponent', () => {
  let component: OpenMenuContentComponent;
  let fixture: ComponentFixture<OpenMenuContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenMenuContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenMenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
