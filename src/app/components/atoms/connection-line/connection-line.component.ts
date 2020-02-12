import { Component, Input, AfterViewInit } from '@angular/core';
import { MenuTitlePositionService } from 'src/app/services/menu-title-position.service';
import { PaletPositionService } from 'src/app/services/palet-position.service';
import 'leader-line';
declare let LeaderLine: any;

@Component({
  selector: 'app-connection-line',
  templateUrl: './connection-line.component.html',
  styleUrls: ['./connection-line.component.scss']
})
export class ConnectionLineComponent implements AfterViewInit {
  @Input() menuPosition!: MenuTitlePositionService;
  @Input() paletsPosition!: PaletPositionService;
  styleMorning: {};
  constructor() {
    this.styleMorning = {};
   }

   ngAfterViewInit(){
    const morningMenuElement = this.menuPosition.morning as HTMLElement;
    const morningPaletElement = this.paletsPosition.morning as HTMLElement;
    const afternoonMenuElement = this.menuPosition.afternoon as HTMLElement;
    const afternoonletElement = this.paletsPosition.afternoon as HTMLElement;
    const nightMenuElement = this.menuPosition.night as HTMLElement;
    const nightletElement = this.paletsPosition.night as HTMLElement;

    new LeaderLine(
      LeaderLine.mouseHoverAnchor({element: morningMenuElement, showEffectName: 'draw', style: {backgroundColor: 'white', outlineColor: ''}}),
      morningPaletElement,
      {
        color: '#12D9E1',
        size: 2,
        path: 'fluid',
        startSocket: 'bottom',
        endSocket: 'left',
      }
    )

    new LeaderLine(
      LeaderLine.mouseHoverAnchor({element: afternoonMenuElement, showEffectName: 'draw', style: {backgroundColor: 'white', outlineColor: ''}}),
      afternoonletElement,
      {
        color: '#12D9E1',
        size: 2,
        path: 'fluid',
        startSocket: 'bottom',
        endSocket: 'top',
      }
    )
    new LeaderLine(
      LeaderLine.mouseHoverAnchor({element: nightMenuElement, showEffectName: 'draw', style: {backgroundColor: 'white', outlineColor: ''}}),
      nightletElement,
      {
        color: '#12D9E1',
        size: 2,
        path: 'fluid',
        startSocket: 'bottom',
        endSocket: 'right',
      }
    )
   }
}
