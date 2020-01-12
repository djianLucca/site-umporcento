import { Component, OnInit, Input } from '@angular/core';
import { TimelineItemService } from 'src/app/services/timeline-item.service';
import { jackInTheBoxOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-timeline-simple-image-text',
  templateUrl: './timeline-simple-image-text.component.html',
  animations:[
    jackInTheBoxOnEnterAnimation()
  ],
  styleUrls: ['./timeline-simple-image-text.component.scss']
})
export class TimelineSimpleImageTextComponent implements OnInit {
  @Input() timelineItem!: TimelineItemService;
  @Input() class!: string;
  timelineIconType: string[];
  timelineItemsImages: string[];
  constructor() {
    this.timelineIconType = [];
    this.timelineItemsImages = [];
  }

  ngOnInit() {
    this.timelineItemsImages = JSON.parse(this.timelineItem.images);
  }

  ecodeToUrl(text: string): string {
    return encodeURI(text);
  }

}
