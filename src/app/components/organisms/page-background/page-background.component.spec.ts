import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBackgroundComponent } from './page-background.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-video-wrapper',
  template: ''
})
class MockVideoWrapperComponent {

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
