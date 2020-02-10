import { Injectable } from '@angular/core';
import { IsearchResults } from './interfaces/isearch-results';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService implements IsearchResults {
  url: string;
  name: string;
  constructor(name: string, url: string) { 
    this.name = name;
    this.url = url;
  }
}
