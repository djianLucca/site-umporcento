import { TimelineItemStyle } from '../enums/timelineitemstyleenum';
import { TimelineItemType } from '../enums/timelineitemtype';
import { TimelineItemFlag } from '../enums/timelineitemflag';

export interface ITimelineItem {
    id: number;
    images: string[];
    style: TimelineItemStyle;
    title: string;
    text: string;
    type: TimelineItemType[];
    flag: TimelineItemFlag | undefined;
    position: 0 | 1 | 2;
    idYear: number;
}
