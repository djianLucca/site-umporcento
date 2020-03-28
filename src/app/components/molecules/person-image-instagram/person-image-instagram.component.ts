import { Component, OnInit, Input } from '@angular/core';
import { flipInXOnEnterAnimation, flipOutXOnLeaveAnimation, slideInUpOnEnterAnimation, slideOutDownOnLeaveAnimation } from 'angular-animations';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-person-image-instagram',
  templateUrl: './person-image-instagram.component.html',
  animations:[
    flipInXOnEnterAnimation({ duration: 800 }),
    flipOutXOnLeaveAnimation({ duration: 800 }),
    slideInUpOnEnterAnimation({ duration: 400, translate: '40%' }),
    slideOutDownOnLeaveAnimation({ duration: 400, translate: '40%' })
  ],
  styleUrls: ['./person-image-instagram.component.scss']
})
export class PersonImageInstagramComponent implements OnInit {
  @Input() defaultImage!: string;
  @Input() instagram!: string;
  @Input() active: boolean;
  @Input() class!: string;
  @Input() page: Page;
  instagramLink: string;
  isLabelVisible: boolean;
  image: string;
  usPage: Page;
  guardianPage: Page;

  constructor() { 
    this.instagramLink = 'https://instagram.com/';
    this.isLabelVisible = false;
    this.active = true;
    this.image = '';
    this.page = Page.Us;
    this.usPage = Page.Us;
    this.guardianPage = Page.Guardians;
  }

  ngOnInit() {
    this.instagramLink += this.instagram;
    this.image = this.defaultImage + '_colored';
  }
  
  changeLabelVisibility(action: string){
    if(!this.active){
      return;
    }
    if(action === 'hide'){
      this.isLabelVisible = false;
    }else{
      this.isLabelVisible = true;
    }
  }

}
