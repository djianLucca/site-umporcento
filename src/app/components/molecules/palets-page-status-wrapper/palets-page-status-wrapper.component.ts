import { Component, Input, AfterContentInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { PaletPositionService } from 'src/app/services/palet-position.service';
import { pulseAnimation } from 'angular-animations';

@Component({
  selector: 'app-palets-page-status-wrapper',
  templateUrl: './palets-page-status-wrapper.component.html',
  animations: [
    pulseAnimation({ scale: 1.5, direction: '=>' })
  ],
  styleUrls: ['./palets-page-status-wrapper.component.scss']
})
export class PaletsPageStatusWrapperComponent implements AfterContentInit {
  @Input() pageStatus!: PageSectionStatus;
  @ViewChild('wrapper', {static: true}) wrapper!: ElementRef;
  @Output() paletsPosition = new EventEmitter<PaletPositionService>();
  nameCircleIcon: string;
  pageStatusMorning: PageSectionStatus;
  pageStatusAfternoon: PageSectionStatus;
  pageStatusNight: PageSectionStatus;
  hoverMorning: boolean = false;
  hoverAfternoon: boolean = false;
  hoverNight: boolean = false;



  constructor() {
    this.nameCircleIcon = 'circle';
    this.pageStatusMorning = PageSectionStatus.Morning;
    this.pageStatusAfternoon = PageSectionStatus.Afternoon;
    this.pageStatusNight = PageSectionStatus.Night;

  }

  ngAfterContentInit() {
    this.paletsPosition.emit(new PaletPositionService(
      this.wrapper.nativeElement.childNodes[0],
      this.wrapper.nativeElement.childNodes[1],
      this.wrapper.nativeElement.childNodes[2]
    ));
  }

  toggleHoverMorning(value: boolean){
    this.hoverMorning = value;
  }

  toggleHoverAfternoon(value: boolean){
    this.hoverAfternoon = value;
  }

  toggleHoverNight(value: boolean){
    this.hoverNight = value;
  }

}
