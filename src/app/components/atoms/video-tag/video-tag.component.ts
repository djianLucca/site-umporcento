import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-tag',
  templateUrl: './video-tag.component.html',
  styleUrls: ['./video-tag.component.sass']
})
export class VideoTagComponent implements OnInit {
  @Input() video: string | undefined;
  constructor() { }

  ngOnInit() {
  }

}
