import { Injectable } from '@angular/core';
import { IresposiveHelper } from './interfaces/iresposive-helper';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveHelperService implements IresposiveHelper {

  constructor() { }
  newEmentWidthBasedOnCreenSize(screenWidth1: number, screenWidth2: number, elementWidth1: number): number{
    return (elementWidth1 * screenWidth2) / screenWidth1;
  }
}
