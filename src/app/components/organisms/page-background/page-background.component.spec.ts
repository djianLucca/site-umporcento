import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBackgroundComponent } from './page-background.component';
import { Component, Input } from '@angular/core';
import { PageSectionBackground } from 'src/app/services/enums/pageSectionbackgroundenum';

@Component({
  selector: 'app-video-wrapper',
  template: ''
})
class MockVideoWrapperComponent {
  @Input() backgroundVideo: PageSectionBackground;
  constructor(){
    this.backgroundVideo = PageSectionBackground.Morning;
  }
}

describe('PageBackgroundComponent', () => {
  let component: PageBackgroundComponent;
  let fixture: ComponentFixture<PageBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageBackgroundComponent,
        MockVideoWrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
