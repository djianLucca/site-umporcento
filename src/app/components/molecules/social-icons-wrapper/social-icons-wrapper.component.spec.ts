import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialIconsWrapperComponent } from './social-icons-wrapper.component';

describe('SocialIconsWrapperComponent', () => {
  let component: SocialIconsWrapperComponent;
  let fixture: ComponentFixture<SocialIconsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialIconsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialIconsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
