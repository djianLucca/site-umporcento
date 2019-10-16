import { Component, OnInit } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { StateService } from 'src/app/services/state.service';
import { StateManipulatorService } from 'src/app/services/state-manipulator.service';
import { StateInitialiserService } from 'src/app/services/state-initialiser.service';
import { InternalRoutesService } from 'src/app/services/internal-routes.service';
import { InternalRoutesHandlerService } from 'src/app/services/internal-routes-handler.service';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {
  state: StateService;
  stateManipulator: StateManipulatorService;
  internalRouter: InternalRoutesHandlerService;
  morningPage: PageSectionStatus;
  constructor() {
    this.state = new StateInitialiserService().getState();
    this.stateManipulator = new StateManipulatorService(this.state);
    this.morningPage = PageSectionStatus.Morning;
    this.internalRouter = new InternalRoutesHandlerService([
      new InternalRoutesService('/manha', this.sitchToMorning.bind(this)),
      new InternalRoutesService('/tarde', this.sitchToAfternoon.bind(this)),
      new InternalRoutesService('/noite', this.sitchToNight.bind(this)),
      new InternalRoutesService('/manha/bussola', this.switchToCompass.bind(this)),
      new InternalRoutesService('/tarde/linha-do-tempo', this.switchToTimeline.bind(this))
    ]);
  }

  ngOnInit() {
    this.internalRouter.takeAction(window.location.pathname);
  }

  isFloatingIconPage(): boolean {
    if (this.state.page === Page.Morning
      || this.state.page === Page.Afternoon
      || this.state.page === Page.Night) {
      return true;
    }
    return false;
  }
  isInformativePage(): boolean{
    if(this.state.page === Page.Compass){
      return true;
    }
    return false;
  }

  isTimelinePage(): boolean{
    return this.state.page === Page.Timeline;
  }

  changeSection(pageSection: PageSectionStatus) {
    this.state = this.stateManipulator.changePageSection(pageSection);
  }
  changePage(page: Page) {
    this.state = this.stateManipulator.changePage(page);
  }
  changeBackground(pageSection: PageSectionStatus) {
    this.state = this.stateManipulator.changePageBackground(pageSection);
  }

  sitchToMorning() {
    this.changeSection(PageSectionStatus.Morning);
  }

  sitchToAfternoon() {
    this.changeSection(PageSectionStatus.Afternoon);
  }
  sitchToNight() {
    this.changeSection(PageSectionStatus.Night);
  }
  switchToCompass() {
    this.changePage(Page.Compass);
    this.changeBackground(PageSectionStatus.Morning);
  }
  switchToTimeline() {
    this.changePage(Page.Timeline);
    this.changeBackground(PageSectionStatus.Afternoon);
  }

}
