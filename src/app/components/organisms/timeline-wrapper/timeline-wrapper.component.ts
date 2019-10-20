import { Component, OnInit, Input } from '@angular/core';
import { YearService } from 'src/app/services/year.service';
import { TimelineItemService } from 'src/app/services/timeline-item.service';

@Component({
  selector: 'app-timeline-wrapper',
  templateUrl: './timeline-wrapper.component.html',
  styleUrls: ['./timeline-wrapper.component.scss']
})
export class TimelineWrapperComponent implements OnInit {
  @Input() timelineYears!: YearService[];
  @Input() timelineItems!: TimelineItemService[];
  constructor() { }

  ngOnInit() {
    //console.log(this.timelineYears);
  }

}
