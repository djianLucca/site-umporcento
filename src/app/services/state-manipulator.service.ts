import { Injectable } from '@angular/core';
import { IstateManipulator } from './interfaces/istate-manipulator';
import { StateService } from './state.service';
import { Page } from './enums/pageenum';
import { PageSectionStatus } from './enums/pageSectionStatusenum';
import { PageSectionBackground } from './enums/pageSectionbackgroundenum';
import { FloatingIconBuilderService } from './floating-icon-builder.service';
import { FloatingIconsService } from './floating-icons.service';
import { YearService } from './year.service';
import { TimelineApiService } from './timeline-api.service';
import { HttpClient } from '@angular/common/http';
import { TimelineItemService } from './timeline-item.service';

@Injectable({
  providedIn: 'root'
})
export class StateManipulatorService implements IstateManipulator {

  state: StateService;
  floatingIconBuilder: FloatingIconBuilderService;
  timelineApi: TimelineApiService;
  constructor(state: StateService, private http: HttpClient ) {
    this.state = state;
    this.floatingIconBuilder = new FloatingIconBuilderService();
    this.timelineApi = new TimelineApiService(this.http);
  }

  changePage(page: Page): StateService {
    this.state.page = page;
    return this.state;
  }

  changePageBackground(pageSection: PageSectionStatus): StateService {
    console.log(pageSection, pageSection === this.state.pageSection);
    switch (pageSection) {
      case PageSectionStatus.Morning:
        if(this.state.pageBackground !== PageSectionBackground.Morning){
          this.state.pageBackground = PageSectionBackground.Morning;
        }
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
    this.state.floatingIcons = this.changeFloatingIconsBasedOnSection(pageSection);
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
  changeFloatingIconsBasedOnSection(pageSection: PageSectionStatus): FloatingIconsService[]{
    switch (pageSection) {
      case PageSectionStatus.Morning:
        return this.floatingIconBuilder.buildFloatingIconsMorning();
      case PageSectionStatus.Afternoon:
        return this.floatingIconBuilder.buildFloatingIconsAfternoon();
      default:
        return this.floatingIconBuilder.buildFloatingIconsNight();
    }
  }

  setTimelineInitalStatus(){
    this.setTimelineYears();
    this.setTimelineItems();
  }

  setTimelineYears(){
    this.timelineApi
    .getYears()
    .subscribe((years: YearService[]) =>{
      this.state.timelineYears = years
    });
  }
  setTimelineItems(){
    this.timelineApi
    .getItems()
    .subscribe((items: TimelineItemService[]) =>{
      this.state.timelineItems = items;
    });
  }

  toggleMenu(){
    if(this.state.isMenuOpen){
      this.state.isMenuOpen = false;
    }else{
      this.state.isMenuOpen = true;
    }
  }
}
