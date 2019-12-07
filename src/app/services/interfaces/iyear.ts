import { TimelineItemService } from '../timeline-item.service';

export interface Iyear {
    id: number;
    mantra: string;
    year: number;
    yearItems: TimelineItemService[] | TimelineItemService[][]
    upperItems: TimelineItemService[][];
    lowerItems: TimelineItemService[][];
}
