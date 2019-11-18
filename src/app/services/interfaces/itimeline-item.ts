import { TimelineItemStyle } from '../enums/timelineitemstyleenum';
import { TimelineItemFlag } from '../enums/timelineitemflag';

export interface ITimelineItem {
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
}
