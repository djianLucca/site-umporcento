import { Injectable } from '@angular/core';
import { IpaletPosition } from './interfaces/ipalet-position';

@Injectable({
  providedIn: 'root'
})
export class PaletPositionService implements IpaletPosition {
  morning: HTMLElement | null;
  afternoon: HTMLElement | null;
  night: HTMLElement | null;

  constructor(
    morning: HTMLElement | null, 
    afternoon: HTMLElement | null, 
    night: HTMLElement | null) { 
      this.morning = morning;
      this.afternoon = afternoon;
      this.night = night;
    }
}
