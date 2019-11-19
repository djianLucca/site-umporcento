import { Component, OnInit, Input } from '@angular/core';
import { TimelineItemService } from 'src/app/services/timeline-item.service';

@Component({
  selector: 'app-timeline-simple-image-left-text',
  templateUrl: './timeline-simple-image-left-text.component.html',
  styleUrls: ['./timeline-simple-image-left-text.component.scss']
})
export class TimelineSimpleImageLeftTextComponent implements OnInit {
  @Input() timelineItem!: TimelineItemService;
  timelineIconType: string[];
  timelineItemsImages: string[];
  constructor() {
    this.timelineIconType = [];
    this.timelineItemsImages = [];
  }

  ngOnInit() {
    console.log('left image', this.timelineItem);
    this.timelineItemsImages = JSON.parse(this.timelineItem.images);
  }

  ecodeToUrl(text: string): string {
    return encodeURI(text);
  }

}
