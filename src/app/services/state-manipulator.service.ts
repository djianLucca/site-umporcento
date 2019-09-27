import { Injectable } from '@angular/core';
import { IstateManipulator } from './interfaces/istate-manipulator';
import { StateService } from './state.service';
import { Page } from './enums/pageenum';
import { PageSectionStatus } from './enums/pageSectionStatusenum';
import { PageSectionBackground } from './enums/pageSectionbackgroundenum';

@Injectable({
  providedIn: 'root'
})
export class StateManipulatorService implements IstateManipulator {

  state: StateService;
  constructor(state: StateService) {
    this.state = state;
  }

  changePage(page: Page): StateService {
    this.state.page = page;
    return this.state;
  }

  changePageBackground(pageSection: PageSectionStatus): StateService {
    switch (pageSection) {
      case PageSectionStatus.Morning:
        this.state.pageBackground = PageSectionBackground.Morning;
        return this.state;
      case PageSectionStatus.Afternoon:
        this.state.pageBackground = PageSectionBackground.Afternoon;
        return this.state;
      default:
        this.state.pageBackground = PageSectionBackground.Night;
        return this.state;
    }
  }

  public changePageSection(pageSection: PageSectionStatus): StateService {
    this.state.pageSection = pageSection;
    this.changePageBackground(pageSection);
    console.log(this.state);
    return this.state;
  }

  changePageBasedOnSection(pageSection: PageSectionStatus): Page {
    switch (pageSection) {
      case PageSectionStatus.Morning:
        return Page.Morning;
      case PageSectionStatus.Afternoon:
        return Page.Afternoon;
      default:
          return Page.Night;
    }
  }
}
