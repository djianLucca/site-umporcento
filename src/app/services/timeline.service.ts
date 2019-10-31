import { Injectable } from '@angular/core';
import { ITimeline } from './interfaces/itimeline';
import { TimelineItemService } from './timeline-item.service';
import { YearService } from './year.service';

@Injectable({
  providedIn: 'root'
})
export class TimelineService implements ITimeline {
  yearItems: TimelineItemService[];
  constructor() { 
    this.yearItems = [];
  }

  orderItems(items: TimelineItemService[], years: YearService[]): YearService[]{
    let orderedYears = this.orderItemsByYear(items, years);
    orderedYears.forEach((orderedYear) =>{
      if(orderedYear.yearItems.length > 0){
        orderedYear.orderedItems = this._isolateItemByRow(orderedYear.yearItems, this._highestRow(orderedYear.yearItems));
        orderedYear.orderedItems.forEach((orderedItem) =>{
          orderedItem = this.orderItemsByLine(orderedItem);
        });
      }
    });

    return orderedYears;
  }
  
  orderItemsByYear(items: TimelineItemService[], years: YearService[]): YearService[]{
    years.forEach(year => {
      this.yearItems = [];
      this.yearItems = items.filter((item)=> item.idYear === year.id);
      year.yearItems = this.yearItems;
    });
    return years;
  }

  orderItemsByLine(items: TimelineItemService[]): TimelineItemService[]{
    items = items.sort(this._compareByLine);
    return items;
  }
  _isolateItemByRow(items: TimelineItemService[], maxRow: number):TimelineItemService[][]{
    let tempArray = [];
    let result = [];
    console.log('_isolateItemByRow1', items, 'max', maxRow);
    for (let index = 0; index <= maxRow; index++) {
      tempArray = items.filter((item)=> item.rowPosition === index);
      console.log('_isolateItemByRow2', tempArray, index);
      if(tempArray.length > 0){
        result.push(this.orderItemsByLine(tempArray));
      }
    }
    return result;
  }

  _compareByLine(a: TimelineItemService, b: TimelineItemService): number{
    if( a.linePosition < b.linePosition ){
      return -1;
    }
    if( a.linePosition > b.linePosition ){
      return 1;
    }
    return 0;
  }


  _highestRow(items: TimelineItemService[]): number{
    let highest = 0;
    items.forEach((item) => {
      if(item.rowPosition > highest){
        highest = item.rowPosition;
      }
    });

    return highest;
  }

}
