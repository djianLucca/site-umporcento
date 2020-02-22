import { Component, OnInit, Input } from '@angular/core';
import { fadeInLeftOnEnterAnimation, fadeOutLeftOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-branding-image-information',
  templateUrl: './branding-image-information.component.html',
  animations:[
    fadeInLeftOnEnterAnimation(),
    fadeOutLeftOnLeaveAnimation()
  ],
  styleUrls: ['./branding-image-information.component.scss']
})
export class BrandingImageInformationComponent implements OnInit {
  @Input() image!: string;
  @Input() imageAlt!: string;
  @Input() title!: string;
  @Input() brandName!: string;
  @Input() social!: string;
  @Input() site!: string;
  @Input() socialUrl!: string;
  isLabelVisible: boolean;

  constructor() { 
    this.isLabelVisible = false;
  }

  ngOnInit() {
  }

  navigateTo(url :string){
    window.open(url, "_blank");
  }
  
  changeLabelVisibility(action: string){
    if(action === 'hide'){
      this.isLabelVisible = false;
    }else{
      this.isLabelVisible = true;
    }
  }
}
