import { Component, Input, AfterContentInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { PaletPositionService } from 'src/app/services/palet-position.service';
import { TwoDPositionService } from 'src/app/services/2d-position.service';

@Component({
  selector: 'app-palets-page-status-wrapper',
  templateUrl: './palets-page-status-wrapper.component.html',
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

  constructor() {
    this.nameCircleIcon = 'circle';
    this.pageStatusMorning = PageSectionStatus.Morning;
    this.pageStatusAfternoon = PageSectionStatus.Afternoon;
    this.pageStatusNight = PageSectionStatus.Night;
  }

  ngAfterContentInit() {
    this.paletsPosition.emit(new PaletPositionService(
      this.getAbsolutePosition(this.wrapper.nativeElement.childNodes[0]),
      this.getAbsolutePosition(this.wrapper.nativeElement.childNodes[1]),
      this.getAbsolutePosition(this.wrapper.nativeElement.childNodes[2])
    ));
  }

  getAbsolutePosition(node: HTMLElement): TwoDPositionService{
    const element = node.getBoundingClientRect() as DOMRect;
    return new TwoDPositionService(element.x, element.y);
  }

}
