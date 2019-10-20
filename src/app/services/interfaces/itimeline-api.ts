import { YearService } from '../year.service';
import { TimelineItemService } from '../timeline-item.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ItimelineApi {
    apiUrl: string;
    httpService: HttpClient;
    getYears(): Observable<YearService[]>;
    getItems(): Observable<TimelineItemService[]>;
}
