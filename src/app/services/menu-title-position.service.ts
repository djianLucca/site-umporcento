import { Injectable } from '@angular/core';
import { ImenuTitlePosition } from './interfaces/imenu-title-position';
import { TwoDPositionService } from './2d-position.service';

@Injectable({
  providedIn: 'root'
})
export class MenuTitlePositionService implements ImenuTitlePosition {
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
