import { TimelineItemService } from '../timeline-item.service';
import { YearService } from '../year.service';

export interface ITimeline {
    orderItems(items: TimelineItemService[], years: YearService[]): Promise<YearService[]>;
    orderItemsByYear(items: TimelineItemService[], years: YearService[]): YearService[];
    orderItemsByLine(items: TimelineItemService[]): TimelineItemService[];
    _isolateItemByRow(items: TimelineItemService[], maxRow: number):TimelineItemService[][];
    _compareByLine(a: TimelineItemService, b: TimelineItemService): number;
    _highestRow(items: TimelineItemService[]): number;
}
