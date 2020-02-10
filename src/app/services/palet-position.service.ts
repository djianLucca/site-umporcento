import { Injectable } from '@angular/core';
import { IpaletPosition } from './interfaces/ipalet-position';
import { TwoDPositionService } from './2d-position.service';

@Injectable({
  providedIn: 'root'
})
export class PaletPositionService implements IpaletPosition {
  morning: TwoDPositionService;
  afternoon: TwoDPositionService;
  night: TwoDPositionService;

  constructor(
    morning: TwoDPositionService, 
    afternoon: TwoDPositionService, 
    night: TwoDPositionService) { 
      this.morning = morning;
      this.afternoon = afternoon;
      this.night = night;
    }
}
