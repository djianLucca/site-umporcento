import { Injectable } from '@angular/core';
import { ItimelineApi } from './interfaces/itimeline-api';
import { HttpClient } from '@angular/common/http';
import { YearService } from './year.service';
import { Observable } from 'rxjs';
import { TimelineItemService } from './timeline-item.service';
import { EmailResponseApiService } from './email-response-api.service';

@Injectable({
  providedIn: 'root'
})
export class TimelineApiService implements ItimelineApi {
  apiUrl: string;

  constructor(private httpService: HttpClient) {
    this.apiUrl = 'http://52.67.190.78:3000';
    if (window.location.hostname === 'localhost') {
      this.apiUrl = 'http://localhost:3000';
    }

  }

  getYears(): Observable<YearService[]> {
    return this.httpService.get<YearService[]>(this.apiUrl + '/years');
  }
  getItems(): Observable<TimelineItemService[]> {
    return this.httpService.get<TimelineItemService[]>(this.apiUrl + '/items');
  }
  sendMail(email: string, body:string): Observable<EmailResponseApiService>{
   return this.httpService.post<EmailResponseApiService>(this.apiUrl + '/send_mail',{"email":email, "text":body});
  }
}
