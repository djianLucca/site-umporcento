import { Injectable } from "@angular/core";
import { ItimelineApi } from "./interfaces/itimeline-api";
import { HttpClient } from "@angular/common/http";
import { YearService } from "./year.service";
import { Observable } from "rxjs";
import { TimelineItemService } from './timeline-item.service';

@Injectable({
  providedIn: "root"
})
export class TimelineApiService implements ItimelineApi {
  apiUrl: string;

  constructor(private httpService: HttpClient) {
    this.apiUrl = "http://localhost:3000";
  }

  getYears(): Observable<YearService[]> {
    console.log('teste');
    return this.httpService.get<YearService[]>(this.apiUrl + "/get_years");
  }
  getItems(): Observable<TimelineItemService[]> {
    return this.httpService.get<TimelineItemService[]>(this.apiUrl + "/get_items");
  }
}
