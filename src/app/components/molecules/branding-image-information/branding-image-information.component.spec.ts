import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingImageInformationComponent } from './branding-image-information.component';

describe('BrandingImageInformationComponent', () => {
  let component: BrandingImageInformationComponent;
  let fixture: ComponentFixture<BrandingImageInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandingImageInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandingImageInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
