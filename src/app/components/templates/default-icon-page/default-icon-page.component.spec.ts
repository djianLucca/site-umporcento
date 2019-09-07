import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultIconPageComponent } from './default-icon-page.component';

describe('DefaultIconPageComponent', () => {
  let component: DefaultIconPageComponent;
  let fixture: ComponentFixture<DefaultIconPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultIconPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultIconPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
