import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { YearService } from 'src/app/services/year.service';
import { TimelineItemService } from 'src/app/services/timeline-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline-page-content',
  templateUrl: './timeline-page-content.component.html',
  styleUrls: ['./timeline-page-content.component.scss']
})
export class TimelinePageContentComponent implements OnInit {
  @Input() pageSection!: Page;
  @Input() socialIcons: SocialIconsService[];
  @Input() timelineYears!: YearService[];
  @Input() tinelineItems!: TimelineItemService[];
  @Input() updateApi!: () => {};
  @Input() menuAction!: () => void;
  @Input() openMenu: boolean;
  constructor(private router: Router) { 
    this.socialIcons = [];
    this.openMenu = false;
  }

  ngOnInit() {
    this.updateApi();
  }

  
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if(event.target === document.querySelector('#timeline_wrapper') || 
      event.target === document.querySelector('#midle_content__wrapper') || 
      event.target === document.querySelector('.search_wrapper')         || 
      event.target === document.querySelector('#top-wrapper')){
      this.router.navigate(['/noite'])
    }
  }

}
