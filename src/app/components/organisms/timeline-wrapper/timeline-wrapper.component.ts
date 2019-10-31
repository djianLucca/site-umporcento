import { Component, Input, OnChanges } from '@angular/core';
import { YearService } from 'src/app/services/year.service';
import { TimelineItemService } from 'src/app/services/timeline-item.service';
import { TimelineService } from 'src/app/services/timeline.service';

@Component({
  selector: 'app-timeline-wrapper',
  templateUrl: './timeline-wrapper.component.html',
  styleUrls: ['./timeline-wrapper.component.scss']
})
export class TimelineWrapperComponent implements OnChanges {
  @Input() timelineYears!: YearService[];
  @Input() timelineItems!: TimelineItemService[];
  timeline: TimelineService;
  constructor() { 
    this.timeline = new TimelineService();
  }
  orderItems(){
    this.timelineYears = this.timeline.orderItems(this.timelineItems, this.timelineYears);
  }
  ngOnChanges() {
    this.orderItems();
    console.log('ngOnChanges',this.timelineYears);
  }

}
