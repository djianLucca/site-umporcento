import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-tag',
  templateUrl: './video-tag.component.html',
  styleUrls: ['./video-tag.component.scss']
})
export class VideoTagComponent implements OnInit {
  @Input() video: string | undefined;
  @Input() loop: boolean;
  @Input() id: string | undefined;
  @Input() controled: boolean;
  @Input() class: string | undefined;
  
  constructor() {
    this.loop = false;
    this.controled = false;
    this.class = '';
  }

  ngOnInit() {
    this.class = this.class + ' controlers'+this.controled
  }

}
