import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-icon-page-content',
  templateUrl: './icon-page-content.component.html',
  styleUrls: ['./icon-page-content.component.scss']
})
export class IconPageContentComponent implements OnInit {

  @Input() pageSection: PageSectionStatus | undefined;

  constructor() { }

  ngOnInit() {
  }

}
