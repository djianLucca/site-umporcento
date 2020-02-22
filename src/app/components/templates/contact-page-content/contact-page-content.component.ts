import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page-content',
  templateUrl: './contact-page-content.component.html',
  styleUrls: ['./contact-page-content.component.scss']
})
export class ContactPageContentComponent implements OnInit {
  @Input() pageSection: PageSectionStatus;
  @Input() socialIcons: SocialIconsService[];
  @Input() contactFormAction!: (email:string, text: string) => {};
  @Input() menuAction!: () => void;
  @Input() openMenu: boolean;
  pageLocationHelper: PageLocationHelperService;
  
  constructor(private router: Router) { 
    this.openMenu = false;
    this.pageSection = PageSectionStatus.Night;
    this.socialIcons = [];
    this.pageLocationHelper = new PageLocationHelperService();
  }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if(event.target === document.querySelector('#contact_page__wrapper')){
      this.router.navigate(['/noite'])
    }
  }
}
