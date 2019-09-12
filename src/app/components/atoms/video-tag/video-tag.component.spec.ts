import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTagComponent } from './video-tag.component';
import { DebugElement } from '@angular/core';

describe('VideoTagComponent', () => {
  let component: VideoTagComponent;
  let fixture: ComponentFixture<VideoTagComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTagComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('shoudl be a html <video> tag', () => {
    expect(de.nativeElement.querySelector('video')).toBeTruthy();
  });
});
