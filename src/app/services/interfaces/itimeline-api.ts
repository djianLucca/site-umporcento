import { YearService } from '../year.service';
import { TimelineItemService } from '../timeline-item.service';
import { Observable } from 'rxjs';

export interface ItimelineApi {
    apiUrl: string;
    getYears(): Observable<YearService[]>;
    getItems(page: number, year?: number, text?: string, title?: string): Observable<TimelineItemService[]>;
}
