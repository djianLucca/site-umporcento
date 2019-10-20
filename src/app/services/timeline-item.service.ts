import { Injectable } from "@angular/core";
import { ITimelineItem } from "./interfaces/itimeline-item";
import { TimelineItemStyle } from "./enums/timelineitemstyleenum";
import { TimelineItemType } from "./enums/timelineitemtype";
import { TimelineItemFlag } from "./enums/timelineitemflag";

@Injectable({
  providedIn: "root"
})
export class TimelineItemService implements ITimelineItem {
  id: number;
  images: string[];
  style: TimelineItemStyle;
  title: string;
  text: string;
  type: TimelineItemType[];
  flag: TimelineItemFlag | undefined;
  position: 0 | 1 | 2;
  idYear: number;

  constructor(
    id: number,
    images: string[],
    style: TimelineItemStyle,
    title: string,
    text: string,
    type: TimelineItemType[],
    flag: TimelineItemFlag | undefined,
    position: 0 | 1 | 2,
    idYear: number
  ) {
    this.id = id;
    this.images = images;
    this.style = style;
    this.title = title;
    this.text = text;
    this.type = type;
    this.flag = flag;
    this.position = position;
    this.idYear = idYear;
  }
}
