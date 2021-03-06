
import { ITimelineItem } from './interfaces/itimeline-item';
import { TimelineItemStyle } from './enums/timelineitemstyleenum';
import { TimelineItemFlag } from './enums/timelineitemflag';

// @Injectable({
//   providedIn: 'root'
// })
export class TimelineItemService implements ITimelineItem {
  id: number;
  images: string;
  style: TimelineItemStyle;
  title: string;
  text: string;
  type: string;
  flag: TimelineItemFlag | undefined;
  idYear: number;
  linePosition: -2 | -1 | 0 | 1 | 2;
  rowPosition: -2 | -1 | 0 | 1 | 2;
  galeryImagesLeft: number;
  galeryImagesUp: number;
  galeryImagesDown: number;
  galeryImagesRight: number;
  video: string | undefined;

  constructor(
    id: number,
    images: string,
    style: TimelineItemStyle,
    title: string,
    text: string,
    type: string,
    flag: TimelineItemFlag | undefined,
    idYear: number,
    linePosition: -2 | -1 | 0 | 1 | 2,
    rowPosition: -2 | -1 | 0 | 1 | 2,
    galeryImagesLeft: number,
    galeryImagesUp: number,
    galeryImagesDown: number,
    galeryImagesRight: number,
    video: string | undefined
  ) {
    this.id = id;
    this.images = images;
    this.style = style;
    this.title = title;
    this.text = text;
    this.type = type;
    this.flag = flag;
    this.linePosition = linePosition;
    this.rowPosition = rowPosition;
    this.idYear = idYear;
    this.galeryImagesLeft = galeryImagesLeft;
    this.galeryImagesUp = galeryImagesUp;
    this.galeryImagesDown = galeryImagesDown;
    this.galeryImagesRight = galeryImagesRight;
    this.video = video
  }
}
