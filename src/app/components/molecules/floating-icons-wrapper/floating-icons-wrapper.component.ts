import { Component, Input, OnChanges } from '@angular/core';
import { FloatingIconsService } from 'src/app/services/floating-icons.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { FloatingIconImage } from 'src/app/services/enums/floatingiconimageenum';
import { Router } from '@angular/router';
import { PageLocationHelperService } from 'src/app/services/helper/page-location-helper.service';

@Component({
  selector: 'app-floating-icons-wrapper',
  templateUrl: './floating-icons-wrapper.component.html',
  styleUrls: ['./floating-icons-wrapper.component.scss']
})
export class FloatingIconsWrapperComponent implements OnChanges {
  imageSrc: string;
  @Input() floatingIcons: FloatingIconsService[];
  @Input() pageStatus: PageSectionStatus;
  showLabel: boolean;
  defaultClass: string;
  defaultClassBuilt!: string;
  animIcon: boolean;
  pageLocationHelper: PageLocationHelperService;

  constructor(private router: Router) {
    this.imageSrc = '/assets/img/selo.jpg';
    this.floatingIcons = [];
    this.pageStatus = PageSectionStatus.Night;
    this.showLabel = false;
    this.defaultClass = 'contianer_icon';
    this.animIcon = false;
    this.pageLocationHelper = new PageLocationHelperService();
  }

  ngOnChanges() {
    this.defaultClassBuilt = this.defaultClass + ' ' + this.pageStatus;
  }

  animateIcon(){
    this.animIcon = true;
  }
  navigateTo(route: string){
    this.router.navigate([route]);
  }

  toggleLabel(image: FloatingIconImage, value: string) {
    this.floatingIcons.forEach(element => {
      if (image === element.image) {
        element.labelStyle.visibility = value;
      }
    });
  }

  openGabw(){
    window.open('https://gabw.cc/', "_blank");
  }

}
