import { Component, OnInit} from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { StateService } from 'src/app/services/state.service';
import { StateManipulatorService } from 'src/app/services/state-manipulator.service';
import { StateInitialiserService } from 'src/app/services/state-initialiser.service';
import { InternalRoutesService } from 'src/app/services/internal-routes.service';
import { InternalRoutesHandlerService } from 'src/app/services/internal-routes-handler.service';

@Component({
  selector: 'app-default-icon-page',
  templateUrl: './default-icon-page.component.html',
  styleUrls: ['./default-icon-page.component.scss']
})
export class DefaultIconPageComponent implements OnInit {
  state: StateService;
  stateManipulator: StateManipulatorService;
  internalRouter: InternalRoutesHandlerService;
  constructor() {
    this.state = new StateInitialiserService().getState();
    this.stateManipulator = new StateManipulatorService(this.state);
    this.internalRouter = new InternalRoutesHandlerService([
      new InternalRoutesService('/manha', this.sitchToMorning.bind(this)),
      new InternalRoutesService('/tarde', this.sitchToAfternoon.bind(this)),
      new InternalRoutesService('/night', this.sitchToNight.bind(this))
    ]);
  }

  ngOnInit() {
    this.internalRouter.takeAction(window.location.pathname);
  }

  changeSection(pageSection: PageSectionStatus) {
    this.state = this.stateManipulator.changePageSection(pageSection);
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

}
