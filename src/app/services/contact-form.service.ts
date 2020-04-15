
import { HttpClient } from '@angular/common/http';
import { TimelineApiService } from './timeline-api.service';

// @Injectable({
//   providedIn: 'root'
// })
export class ContactFormService {
  themeApi: TimelineApiService
  constructor(private http: HttpClient) { 
    this.themeApi = new TimelineApiService(this.http);
  }

  async sendMessage(email:string, body:string){
    this.themeApi.sendMail(email, body)
    .subscribe((response) => {
      return response;
    });
  }
}
