import { Injectable } from '@angular/core';
import { IpaletPosition } from './interfaces/ipalet-position';

@Injectable({
  providedIn: 'root'
})
export class PaletPositionService implements IpaletPosition {
  morning: HTMLElement;
  afternoon: HTMLElement;
  night: HTMLElement;

  constructor(
    morning: HTMLElement, 
    afternoon: HTMLElement, 
    night: HTMLElement) { 
      this.morning = morning;
      this.afternoon = afternoon;
      this.night = night;
    }
}
