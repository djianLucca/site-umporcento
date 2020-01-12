import { Injectable } from "@angular/core";
import { ITimeline } from "./interfaces/itimeline";
import { TimelineItemService } from "./timeline-item.service";
import { YearService } from "./year.service";

@Injectable({
  providedIn: "root"
})
export class TimelineService implements ITimeline {
  yearItems: TimelineItemService[];
  constructor() {
    this.yearItems = [];
  }

  async orderItems(
    items: TimelineItemService[],
    years: YearService[]
  ): Promise<YearService[]> {
    const orderedYears = this.orderItemsByYear(items, years);
    orderedYears.forEach(orderedYear => {
      if (orderedYear.yearItems.length > 0) {
        orderedYear.upperItems = this._isolateItemByRow(
          this.isolateUpperItems(orderedYear.yearItems),
          this._highestRow(orderedYear.yearItems)
        );
        orderedYear.lowerItems = this._isolateItemByRow(
          this.isolateLowerItems(orderedYear.yearItems),
          this._highestRow(orderedYear.yearItems)
        );
        orderedYear.upperItems.forEach(orderedItem => {
          orderedItem = this.orderItemsByLine(orderedItem);
        });
        orderedYear.lowerItems.forEach(orderedItem => {
          orderedItem = this.orderItemsByLine(orderedItem);
        });
      }
    });

    return orderedYears;
  }
  isolateUpperItems(items: TimelineItemService[]): TimelineItemService[] {
    return items.filter(item => item.linePosition < 0);
  }

  isolateLowerItems(items: TimelineItemService[]): TimelineItemService[] {
    return items.filter(item => item.linePosition >= 0);
  }

  orderItemsByYear(
    items: TimelineItemService[],
    years: YearService[]
  ): YearService[] {
    years.forEach(year => {
      this.yearItems = [];
      this.yearItems = items.filter(item => item.idYear === year.id);
      year.yearItems = this.yearItems;
    });
    return years;
  }

  orderItemsByLine(items: TimelineItemService[]): TimelineItemService[] {
    items = items.sort(this._compareByLine);
    return items;
  }
  _isolateItemByRow(
    items: TimelineItemService[],
    maxRow: number
  ): TimelineItemService[][] {
    let tempArray = [];
    const result = [];
    for (let index = 0; index <= maxRow; index++) {
      tempArray = items.filter(item => item.rowPosition === index);
      if (tempArray.length > 0) {
        result.push(this.orderItemsByLine(tempArray));
      }
    }
    return result;
  }

  _compareByLine(a: TimelineItemService, b: TimelineItemService): number {
    if (a.linePosition < b.linePosition) {
      return -1;
    }
    if (a.linePosition > b.linePosition) {
      return 1;
    }
    return 0;
  }

  _highestRow(items: TimelineItemService[]): number {
    let highest = 0;
    items.forEach(item => {
      if (item.rowPosition > highest) {
        highest = item.rowPosition;
      }
    });

    return highest;
  }
}
