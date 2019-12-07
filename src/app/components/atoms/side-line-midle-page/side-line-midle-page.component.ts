import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-side-line-midle-page',
  templateUrl: './side-line-midle-page.component.html',
  styleUrls: ['./side-line-midle-page.component.scss']
})
export class SideLineMidlePageComponent implements OnInit {
  @Input() endLine: boolean;
  @Input() pageSection: PageSectionStatus
  constructor() { 
    this.endLine = false;
    this.pageSection = PageSectionStatus.Night;
  }

  ngOnInit() {
  }
  getEndLine(){
    return this.endLine ? 'end': '';
  }
}
