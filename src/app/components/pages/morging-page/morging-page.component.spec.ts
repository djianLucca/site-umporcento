import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorgingPageComponent } from './morging-page.component';

describe('MorgingPageComponent', () => {
  let component: MorgingPageComponent;
  let fixture: ComponentFixture<MorgingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorgingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorgingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
