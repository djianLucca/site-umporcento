import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { SocialIconsService } from 'src/app/services/social-icons.service';
import { Page } from 'src/app/services/enums/pageenum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardians-page-content',
  templateUrl: './guardians-page-content.component.html',
  styleUrls: ['./guardians-page-content.component.scss']
})
export class GuardiansPageContentComponent implements OnInit {

  @Input() pageSection: PageSectionStatus;
  @Input() socialIcons: SocialIconsService[];
  @Input() page: Page;
  @Input() menuAction!: () => void;
  @Input() openMenu: boolean = false;

  constructor(private router: Router) {
    this.pageSection = PageSectionStatus.Morning;
    this.socialIcons = [];
    this.page = Page.Guardians;
  }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if(event.target === document.querySelector('#Guardians_wrapper')){
      this.router.navigate(['/manha'])
    }
  }

}
