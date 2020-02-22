import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { Page } from 'src/app/services/enums/pageenum';
import {Router} from "@angular/router"
@Component({
  selector: 'app-informative-page-content',
  templateUrl: './informative-page-content.component.html',
  styleUrls: ['./informative-page-content.component.scss']
})
export class InformativePageContentComponent implements OnInit {
  @Input() page!: Page;
  @Input() pageSection!: PageSectionStatus;
  @Input() socialIcons: SocialIconsService[];
  @Input() menuAction!: () => void;
  @Input() openMenu: boolean;
  sectionId: string;
  constructor(private router: Router) {
    this.socialIcons = [];
    this.sectionId = 'Informative_wrapper';
    this.openMenu = false;
   }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if(event.target === document.querySelector('#Informative_wrapper') || 
      event.target === document.querySelector('#midle_content__wrapper') || 
      event.target === document.querySelector('.search_wrapper')         || 
      event.target === document.querySelector('#top-wrapper')){
      this.router.navigate(['/noite'])
    }
  }
}
