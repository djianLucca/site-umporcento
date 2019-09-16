import { Component, OnInit, Input } from '@angular/core';
import { PageSectionBackground } from 'src/app/services/enums/pageSectionbackgroundenum';

@Component({
  selector: 'app-default-icon-page',
  templateUrl: './default-icon-page.component.html',
  styleUrls: ['./default-icon-page.component.scss']
})
export class DefaultIconPageComponent implements OnInit {
  @Input() backgroundVideo: PageSectionBackground | undefined;
  constructor() { }

  ngOnInit() {
  }

}
