import { Component, OnInit, Input, HostListener } from '@angular/core';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { Page } from 'src/app/services/enums/pageenum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colab-page-content',
  templateUrl: './colab-page-content.component.html',
  styleUrls: ['./colab-page-content.component.scss']
})
export class ColabPageContentComponent implements OnInit {
  @Input() socialIcons!: SocialIconsService[];
  @Input() pageSection: PageSectionStatus;
  @Input() page: Page;
  @Input() menuAction!: () => void;
  @Input() openMenu: boolean = false;
  
  constructor(private router: Router) {
    this.pageSection = PageSectionStatus.Night;
    this.page = Page.Colab;
   }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if(event.target === document.querySelector('#colab_page__wrapper') || 
      event.target === document.querySelector('#midle_content__wrapper') || 
      event.target === document.querySelector('.search_wrapper')         || 
      event.target === document.querySelector('#top-wrapper')){
      this.router.navigate(['/noite'])
    }
  }

}
