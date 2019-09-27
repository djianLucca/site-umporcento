import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DefaultIconPageComponent } from './components/pages/default-icon-page/default-icon-page.component';
import { StateService } from './services/state.service';
import { StateInitialiserService } from './services/state-initialiser.service';
import { StateManipulatorService } from './services/state-manipulator.service';
import { PageSectionStatus } from './services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@NgModule({
  imports: [DefaultIconPageComponent]
})
export class AppComponent implements OnInit {
  title: string;
  state: StateService;
  stateManipulator: StateManipulatorService;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.state = new StateInitialiserService().getState();
    this.stateManipulator = new StateManipulatorService(this.state);
    this.title = this.state.title;
  }

  ngOnInit() {
    console.log(this.stateManipulator);
    console.log(this.document.URL);
  }

  callChangePageSection(pageSection: PageSectionStatus) {
    this.state = this.stateManipulator.changePageSection(pageSection);
  }
}
