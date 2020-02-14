import { Component, Input, OnChanges } from '@angular/core';
import { YearService } from 'src/app/services/year.service';
import { TimelineItemService } from 'src/app/services/timeline-item.service';
import { TimelineService } from 'src/app/services/timeline.service';
import { TimelineApiService } from 'src/app/services/timeline-api.service';
import { HttpClient } from '@angular/common/http';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-timeline-wrapper',
  templateUrl: './timeline-wrapper.component.html',
  styleUrls: ['./timeline-wrapper.component.scss']
})
export class TimelineWrapperComponent implements OnChanges {
  @Input() timelineYears!: YearService[];
  @Input() timelineItems!: TimelineItemService[];
  @Input() selectedItemType: string | undefined;
  @Input() lastShownPage: number;
  years!: YearService[];
  items!:  TimelineItemService[];
  timeline: TimelineService;
  fullPageItem!: TimelineItemService;
  isLoaderOnView: boolean;
  apiTimeline: TimelineApiService;
  showFullItem: boolean;
  search: string | undefined;
  showRefresh: boolean;
  pageSection: PageSectionStatus;

  constructor(private httpService: HttpClient) {
    this.timeline = new TimelineService();
    this.apiTimeline = new TimelineApiService(this.httpService);
    this.isLoaderOnView = false;
    this.lastShownPage = 1;
    this.showFullItem = false;
    this.showRefresh = false;
    this.pageSection = PageSectionStatus.Afternoon;
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

  refreshTimeline(){
    this.timelineYears = this.years;
  }

  isTimelineReady(){
    return (this.timelineYears[0] !== undefined && this.timelineYears[0].lowerItems !== undefined || this.timelineYears[0] !== undefined && this.timelineYears[0].upperItems !== undefined);
  }

  async loadNewItems(status: boolean){
    if(status){
      this.lastShownPage++;

      this.apiTimeline.getItems(this.lastShownPage, undefined, this.search, this.search, this.selectedItemType)
      .subscribe((items: TimelineItemService[]) =>{
        if(items.length > 0){
          this.timelineItems = this.mergeTimelineItemsState(this.timelineItems, items);
          this.timeline.orderItems(this.timelineItems, this.years).then((element)=>{
            this.timelineYears = this.mergeTimelineYearState(this.timelineYears, element);
          })
        }
      });
    }else{
      this.showRefresh = true;
    }
  }

  mergeTimelineYearState(oldState:  YearService[], newObjects: YearService[]): YearService[]{
    return [...oldState.concat(newObjects) // concat the arrays
      .reduce((m, o) => m.set(o.year, Object.assign(m.get(o.year) || {}, o)), // use a map to collect similar objects
      new Map()
    ).values()];
  }

  mergeTimelineItemsState(oldState:  TimelineItemService[], newObjects: TimelineItemService[]): TimelineItemService[]{
    return [...oldState.concat(newObjects) // concat the arrays
      .reduce((m, o) => m.set(o.id, Object.assign(m.get(o.id) || {}, o)), // use a map to collect similar objects
      new Map()
    ).values()];
  }

  searchText(text: string){
    this.search = text;
    this.apiTimeline.getItems(1, undefined, text, text, undefined)
      .subscribe((items: TimelineItemService[]) =>{
        this.timelineItems = items;
        if(this.timelineYears.length < 24){
          this.showRefresh = true;
        }
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

  setTimelineInitalStatus(){
   this.setTimelineYears();
   this.setTimelineItems(1);
  }

  setTimelineYears(){
    this.apiTimeline
    .getYears()
    .subscribe((years: YearService[]) =>{
      this.timelineYears = years
    });
  }
  setTimelineItems(page: number){
    this.apiTimeline
    .getItems(page)
    .subscribe((items: TimelineItemService[]) =>{
      console.log(items);
      this.timelineItems = items;
      this.orderItems(this.timelineItems, this.timelineYears);
      this.showRefresh = false;
    });
  }
}
