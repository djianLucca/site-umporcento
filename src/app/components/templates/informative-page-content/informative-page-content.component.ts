import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { SocialIconsService } from 'src/app/services/social-icons.service';

@Component({
  selector: 'app-informative-page-content',
  templateUrl: './informative-page-content.component.html',
  styleUrls: ['./informative-page-content.component.scss']
})
export class InformativePageContentComponent implements OnInit {
  @Input() pageSection!: PageSectionStatus;
  @Input() socialIcons: SocialIconsService[];
  sectionId: string;
  constructor() {
    this.socialIcons = [];
    this.sectionId = 'Informative_wrapper';
   }

  ngOnInit() {
  }

}
