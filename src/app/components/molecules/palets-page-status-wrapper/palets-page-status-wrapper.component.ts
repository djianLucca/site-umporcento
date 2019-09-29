import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-palets-page-status-wrapper',
  templateUrl: './palets-page-status-wrapper.component.html',
  styleUrls: ['./palets-page-status-wrapper.component.scss']
})
export class PaletsPageStatusWrapperComponent implements OnInit {
  @Input() pageStatus!: PageSectionStatus;

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

  ngOnInit() {

  }

}
