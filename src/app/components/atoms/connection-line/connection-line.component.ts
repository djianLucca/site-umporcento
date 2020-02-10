import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuTitlePositionService } from 'src/app/services/menu-title-position.service';
import { PaletPositionService } from 'src/app/services/palet-position.service';

@Component({
  selector: 'app-connection-line',
  templateUrl: './connection-line.component.html',
  styleUrls: ['./connection-line.component.scss']
})
export class ConnectionLineComponent implements AfterViewInit {
  @Input() menuPosition!: MenuTitlePositionService;
  @Input() paletsPosition!: PaletPositionService;
  @ViewChild('canvas', {static:false}) canvas!: ElementRef<HTMLCanvasElement>;
  
  constructor() {
   }

   ngAfterViewInit(){
      this.drawLine();
   }

  drawLine(){
     const canvasElement = this.canvas.nativeElement as HTMLCanvasElement;
     const context = canvasElement.getContext('2d') as CanvasRenderingContext2D;
     context.canvas.width  = window.innerWidth;
     context.canvas.height = window.innerHeight;
     context.beginPath();
     context.moveTo(this.menuPosition.morning.x, this.menuPosition.morning.y);
     context.lineTo(this.paletsPosition.morning.x, this.paletsPosition.morning.y);
     context.stroke();
     console.log('menu', this.menuPosition);
     console.log('palet', this.paletsPosition);
  }

}
