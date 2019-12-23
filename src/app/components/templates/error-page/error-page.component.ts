import { Component, OnInit, Input } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { SocialIconsService } from 'src/app/services/social-icons.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  @Input() pageSection: PageSectionStatus;
  @Input() socialIcons!: SocialIconsService[];
  
  constructor() { 
    this.pageSection = PageSectionStatus.Morning;
  }

  ngOnInit() {
  }

}
