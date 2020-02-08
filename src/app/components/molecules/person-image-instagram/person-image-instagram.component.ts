import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-image-instagram',
  templateUrl: './person-image-instagram.component.html',
  styleUrls: ['./person-image-instagram.component.scss']
})
export class PersonImageInstagramComponent implements OnInit {
  @Input() defaultImage!: string;
  @Input() instagram!: string;
  @Input() active: boolean;
  @Input() class!: string;
  instagramLink: string;
  isLabelVisible: boolean;
  image: string;

  constructor() { 
    this.instagramLink = 'https://instagram.com/';
    this.isLabelVisible = false;
    this.active = true;
    this.image = '';
  }

  ngOnInit() {
    this.instagramLink += this.instagram;
    this.image = this.defaultImage;
  }

  changeDefaultImage(){
    if(this.isLabelVisible){
      this.image = this.defaultImage + '_colored';
    }else{
      this.image = this.defaultImage;
    }
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
    this.changeDefaultImage();
  }

}
