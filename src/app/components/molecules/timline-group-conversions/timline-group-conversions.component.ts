import { Component, OnInit, Input } from '@angular/core';
import { TimelineItemService } from 'src/app/services/timeline-item.service';

@Component({
  selector: 'app-timline-group-conversions',
  templateUrl: './timline-group-conversions.component.html',
  styleUrls: ['./timline-group-conversions.component.scss']
})
export class TimlineGroupConversionsComponent implements OnInit {
  @Input() timelineItem!: TimelineItemService;
  timelineIconType: string[];
  timelineItemsImages: string[];
  timelineIconTitle: string[];
  timelineIconText: string[];

  constructor() {
    this.timelineIconType = [];
    this.timelineItemsImages = [];
    this.timelineIconTitle = [];
    this.timelineIconText = [];
  }

  ngOnInit() {
    this.timelineItemsImages = JSON.parse(this.timelineItem.images);
    this.timelineIconTitle = JSON.parse(this.timelineItem.title);
    this.timelineIconText = JSON.parse(this.timelineItem.text);
  }

  ecodeToUrl(text: string): string {
    return encodeURI(text);
  }

}
