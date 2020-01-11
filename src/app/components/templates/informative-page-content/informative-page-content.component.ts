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
  sectionId: string;
  constructor(private router: Router) {
    this.socialIcons = [];
    this.sectionId = 'Informative_wrapper';
   }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if(event.target === document.querySelector('#Informative_wrapper')){
      this.router.navigate(['/manha'])
    }
  }
}
