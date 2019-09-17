import { Component, OnInit, Input } from '@angular/core';
import { PageSectionBackground } from 'src/app/services/enums/pageSectionbackgroundenum';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';

@Component({
  selector: 'app-default-icon-page',
  templateUrl: './default-icon-page.component.html',
  styleUrls: ['./default-icon-page.component.scss']
})
export class DefaultIconPageComponent implements OnInit {
  @Input() backgroundVideo: PageSectionBackground | undefined;
  @Input() pageSection: PageSectionStatus | undefined;
  constructor() { }

  ngOnInit() {
  }

}
