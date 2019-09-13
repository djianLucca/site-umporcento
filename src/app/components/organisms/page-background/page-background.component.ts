import { Component, OnInit, Input } from '@angular/core';
import { PageSectionBackground } from 'src/app/services/enums/pageSectionbackgroundenum';

@Component({
  selector: 'app-page-background',
  templateUrl: './page-background.component.html',
  styleUrls: ['./page-background.component.sass']
})
export class PageBackgroundComponent implements OnInit {
  @Input() backgroundVideo: PageSectionBackground | undefined;
  constructor() { }

  ngOnInit() {
  }

}
