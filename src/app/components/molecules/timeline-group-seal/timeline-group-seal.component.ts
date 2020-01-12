import { Component, OnInit, Input } from '@angular/core';
import { TimelineItemService } from 'src/app/services/timeline-item.service';
import { jackInTheBoxOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-timeline-group-seal',
  templateUrl: './timeline-group-seal.component.html',
  animations:[
    jackInTheBoxOnEnterAnimation()
  ],
  styleUrls: ['./timeline-group-seal.component.scss']
})
export class TimelineGroupSealComponent implements OnInit {
  @Input() timelineItem!: TimelineItemService;
  @Input() class!: string;
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
