import { Component, OnInit, Input, HostListener } from '@angular/core';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { Page } from 'src/app/services/enums/pageenum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network-page-content',
  templateUrl: './network-page-content.component.html',
  styleUrls: ['./network-page-content.component.scss']
})
export class NetworkPageContentComponent implements OnInit {
  @Input() socialIcons!: SocialIconsService[];
  @Input() pageSection: PageSectionStatus;
  @Input() page: Page;
  @Input() menuAction!: () => void;
  @Input() openMenu: boolean = false;
  
  constructor(private router: Router) { 
    this.pageSection = PageSectionStatus.Night;
    this.page = Page.Network;
  }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if(event.target === document.querySelector('#network_page__wrapper')){
      this.router.navigate(['/noite'])
    }
  }

}
