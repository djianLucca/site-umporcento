import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-error-page-component',
  templateUrl: './error-page-component.component.html',
  styleUrls: ['./error-page-component.component.scss']
})
export class ErrorPageComponentComponent implements OnInit {
  @Input() pageSection: PageSectionStatus;
  constructor() { 
    this.pageSection = PageSectionStatus.Morning;
  }

  ngOnInit() {
  }

}
