import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWrapperComponent } from './video-wrapper.component';
import { Component, Input } from '@angular/core';


describe('VideoWrapperComponent', () => {
  let component: VideoWrapperComponent;
  let fixture: ComponentFixture<VideoWrapperComponent>;

  @Component({
    selector: 'app-video-tag',
    template: ''
  })
  class MockVideoTagComponent {
   @Input() video : string;
   @Input() loop: boolean;
   constructor(){
     this.video = ''
     this.loop = false;
   }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VideoWrapperComponent,
        MockVideoTagComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWrapperComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
