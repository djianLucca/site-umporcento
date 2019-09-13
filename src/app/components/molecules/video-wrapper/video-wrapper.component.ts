import { Component, OnInit, Input } from '@angular/core';
import { PageSectionBackground } from 'src/app/services/enums/pageSectionbackgroundenum';

@Component({
  selector: 'app-video-wrapper',
  templateUrl: './video-wrapper.component.html',
  styleUrls: ['./video-wrapper.component.sass']
})
export class VideoWrapperComponent implements OnInit {
  @Input() backgroundVideo: PageSectionBackground | undefined;
  videoToBeShown: string | undefined;
  constructor() { }

  ngOnInit() {
    this.videoToBeShown = 'assets/video/' + this.backgroundVideo + '.mp4';
  }

}
