
import { ImenuTitlePosition } from './interfaces/imenu-title-position';

// @Injectable({
//   providedIn: 'root'
// })
export class MenuTitlePositionService implements ImenuTitlePosition {
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
