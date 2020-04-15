
import { I2DPosition } from './interfaces/i2d-position';

// @Injectable({
//   providedIn: 'root'
// })
export class TwoDPositionService implements I2DPosition {
  x: number;
  y: number;
  constructor(x: number, y: number) { 
    this.x = x;
    this.y = y;
  }
}
