import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-image-instagram',
  templateUrl: './person-image-instagram.component.html',
  styleUrls: ['./person-image-instagram.component.scss']
})
export class PersonImageInstagramComponent implements OnInit {
  @Input() image!: string;
  @Input() instagram!: string;
  @Input() active: boolean;
  @Input() class!: string;
  instagramLink: string;
  isLabelVisible: boolean;

  constructor() { 
    this.instagramLink = 'https://instagram.com/';
    this.isLabelVisible = false;
    this.active = true;
  }

  ngOnInit() {
    this.instagramLink += this.instagram;
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
