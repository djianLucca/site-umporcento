import { Component, OnInit } from '@angular/core';
import { StateInitialiserService } from 'src/app/services/state-initialiser.service';
import { StateService } from 'src/app/services/state.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {
  state: StateService;
  pageSection: PageSectionStatus;
  constructor() { 
    this.state = new StateInitialiserService().getState();
    this.pageSection = PageSectionStatus.Morning;
  }

  ngOnInit() {
  }

}
