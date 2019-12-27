import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailResponseApiService {
  status: string;
  constructor() { 
    this.status = '';
  }
}
