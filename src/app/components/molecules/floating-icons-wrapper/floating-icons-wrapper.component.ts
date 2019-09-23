import { Component, OnInit, Input } from '@angular/core';
import { FloatingIconsService } from 'src/app/services/floating-icons.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { FloatingIconImage } from 'src/app/services/enums/floatingiconimageenum';

@Component({
  selector: 'app-floating-icons-wrapper',
  templateUrl: './floating-icons-wrapper.component.html',
  styleUrls: ['./floating-icons-wrapper.component.scss']
})
export class FloatingIconsWrapperComponent implements OnInit {
  imageSrc: string;
  @Input() floatingIcons: FloatingIconsService[];
  @Input() pageStatus: PageSectionStatus;
  showLabel: boolean;

  constructor() {
    this.imageSrc = '/assets/img/selo.jpg';
    this.floatingIcons = [];
    this.pageStatus = PageSectionStatus.Night;
    this.showLabel = false;
  }

  ngOnInit() {
  }
  toggleLabel(image: FloatingIconImage, value: string) {
    this.floatingIcons.forEach(element => {
      if (image === element.image) {
        element.labelStyle.visibility = value;
      }
    });
  }
}
