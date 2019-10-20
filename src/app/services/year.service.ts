import { Injectable } from '@angular/core';
import { Iyear } from './interfaces/iyear';

@Injectable({
  providedIn: 'root'
})
export class YearService implements Iyear {
  id: number;
  mantra: string;
  year: number;
  constructor(id: number, mantra: string, year: number) { 
    this.id = id;
    this.mantra = mantra;
    this.year = year;
  }
}
