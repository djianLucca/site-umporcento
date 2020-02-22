import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { YearService } from 'src/app/services/year.service';
import { TimelineItemService } from 'src/app/services/timeline-item.service';
import { scaler } from 'src/app/services/animations/generalAnimations';
import { HttpClient } from '@angular/common/http';
import { TimelineApiService } from 'src/app/services/timeline-api.service';
import { TimelineService } from 'src/app/services/timeline.service';

@Component({
  selector: 'app-timeline-page-midle-row',
  templateUrl: './timeline-page-midle-row.component.html',
  animations: [
    scaler
  ],
  styleUrls: ['./timeline-page-midle-row.component.scss']
})
export class TimelinePageMidleRowComponent implements OnInit {
  @Input() pageSection!: PageSectionStatus;
  @Input() timelineYears!: YearService[];
  @Input() tinelineItems!: TimelineItemService[];
  @Input() menuAction!: () => void;
  @Input() openMenu: boolean;
  selectedItemType: string | undefined;
  apiTimeline: TimelineApiService;
  timeline: TimelineService;
  lastShownPage: number;

  constructor(private httpService: HttpClient) {
    this.openMenu = false;
    this.apiTimeline = new TimelineApiService(this.httpService);
    this.timeline = new TimelineService();
    this.lastShownPage = 0;
   }

  ngOnInit() {
  }

  changeItemType(type: string){
    this.selectedItemType = type;
    this.lastShownPage = 0;
    this.apiTimeline.getItems(1, undefined, undefined, undefined, type)
    .subscribe((items: TimelineItemService[]) =>{
      this.tinelineItems = items;
      this.timeline.orderItems(this.tinelineItems, this.timelineYears).then((element)=>{
        this.timelineYears = this.mergeTimelineYearState(this.timelineYears, element);
      })
    })
  }

  mergeTimelineYearState(oldState:  YearService[], newObjects: YearService[]): YearService[]{
    return [...oldState.concat(newObjects) // concat the arrays
      .reduce((m, o) => m.set(o.year, Object.assign(m.get(o.year) || {}, o)), // use a map to collect similar objects
      new Map()
    ).values()];
  }
}
