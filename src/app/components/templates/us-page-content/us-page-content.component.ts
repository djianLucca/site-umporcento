import { Component, OnInit, Input, HostListener } from '@angular/core';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { Page } from 'src/app/services/enums/pageenum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-us-page-content',
  templateUrl: './us-page-content.component.html',
  styleUrls: ['./us-page-content.component.scss']
})
export class UsPageContentComponent implements OnInit {
  @Input() socialIcons!: SocialIconsService[];
  @Input() pageSection: PageSectionStatus;
  @Input() page: Page;
  @Input() menuAction!: () => void;
  
  constructor(private router: Router) { 
    this.pageSection = PageSectionStatus.Night;
    this.page = Page.Us;
  }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if(event.target === document.querySelector('#us_page__wrapper')){
      this.router.navigate(['/noite'])
    }
  }


}
