import { Injectable } from '@angular/core';
import { IInternalRoute } from './interfaces/iinternal-route';

@Injectable({
  providedIn: 'root'
})
export class InternalRoutesService implements IInternalRoute {
  url: string;
  action: () => void;
  constructor(url: string, action: () => void) {
    this.url = url;
    this.action = action;
  }
}
