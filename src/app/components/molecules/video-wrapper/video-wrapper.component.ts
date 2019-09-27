import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PageSectionBackground } from 'src/app/services/enums/pageSectionbackgroundenum';

@Component({
  selector: 'app-video-wrapper',
  templateUrl: './video-wrapper.component.html',
  styleUrls: ['./video-wrapper.component.scss']
})
export class VideoWrapperComponent implements OnInit, OnChanges {
  @Input() backgroundVideo: PageSectionBackground | undefined;
  videoToBeShown: string | undefined;
  bgVideoId: string;
  constructor() {
    this.bgVideoId = 'backgroundVideo';
  }

  ngOnInit() {
  }
  ngOnChanges() {
    this.videoToBeShown = this.updateVideo();
  }

  updateVideo(): string {
     return 'assets/video/' + this.backgroundVideo + '.mp4';
  }

}
