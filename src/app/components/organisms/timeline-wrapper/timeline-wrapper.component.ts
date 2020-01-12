import { Component, Input, OnChanges } from '@angular/core';
import { YearService } from 'src/app/services/year.service';
import { TimelineItemService } from 'src/app/services/timeline-item.service';
import { TimelineService } from 'src/app/services/timeline.service';
import { TimelineApiService } from 'src/app/services/timeline-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timeline-wrapper',
  templateUrl: './timeline-wrapper.component.html',
  styleUrls: ['./timeline-wrapper.component.scss']
})
export class TimelineWrapperComponent implements OnChanges {
  @Input() timelineYears!: YearService[];
  @Input() timelineItems!: TimelineItemService[];
  @Input() selectedItemType: string | undefined;
  years!: YearService[];
  items!:  TimelineItemService[];
  timeline: TimelineService;
  fullPageItem!: TimelineItemService;
  isLoaderOnView: boolean;
  @Input() lastShownPage: number;
  apiTimeline: TimelineApiService;
  showFullItem: boolean;

  constructor(private httpService: HttpClient) {
    this.timeline = new TimelineService();
    this.apiTimeline = new TimelineApiService(this.httpService);
    this.isLoaderOnView = false;
    this.lastShownPage = 1;
    this.showFullItem = false;
  }
  async orderItems(timelineItems: TimelineItemService[], timelineYears: YearService[]) {
    this.timelineYears = await this.timeline.orderItems(timelineItems, timelineYears);
    if(this.isTimelineReady()){
      this.timelineYears = await this.removeEmptyYears(this.timelineYears);
    }
  }

  ngOnChanges() {
    this.years = this.timelineYears;
    this.items = this.timelineItems;
    this.orderItems(this.timelineItems, this.timelineYears);
  }

  async removeEmptyYears(years: YearService[]){
    return years.filter((element) => {
        return element.yearItems.length > 0;
      })
  }

  removeEmptyYearsSync(years: YearService[]){
    return years.filter((element) => {
        return element.yearItems.length > 0;
      })
  }

  isTimelineReady(){
    return (this.timelineYears[0] !== undefined && this.timelineYears[0].lowerItems !== undefined || this.timelineYears[0] !== undefined && this.timelineYears[0].upperItems !== undefined);
  }

  async loadNewItems(status: boolean){
    if(status){
      this.lastShownPage++;
      this.apiTimeline.getItems(this.lastShownPage, undefined, undefined, undefined, this.selectedItemType)
      .subscribe((items: TimelineItemService[]) =>{
        this.timelineItems = this.timelineItems.concat(items);
        this.timeline.orderItems(this.timelineItems, this.years).then((element)=>{
          this.timelineYears = this.mergeTimelineYearState(this.timelineYears, element);
        })
      });
    }
  }

  mergeTimelineYearState(oldState:  YearService[], newObjects: YearService[]): YearService[]{
    return [...oldState.concat(newObjects) // concat the arrays
      .reduce((m, o) => m.set(o.year, Object.assign(m.get(o.year) || {}, o)), // use a map to collect similar objects
      new Map()
    ).values()];
  }

  searchText(text: string){
    this.apiTimeline.getItems(1, undefined, text, text, undefined)
      .subscribe((items: TimelineItemService[]) =>{
        this.timelineItems = items;
        this.timeline.orderItems(this.timelineItems, this.years).then((element)=>{
          
          this.timelineYears =  this.removeEmptyYearsSync(element);
        })
      });
  }

  openItemFullPage(item: TimelineItemService){
    this.fullPageItem = item;
    this.showFullItem = true;
  }
  closeItemFullPage(){
    this.showFullItem = false;
  }
}
