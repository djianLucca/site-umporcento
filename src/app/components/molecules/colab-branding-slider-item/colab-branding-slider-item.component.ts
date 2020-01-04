import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-colab-branding-slider-item',
  templateUrl: './colab-branding-slider-item.component.html',
  styleUrls: ['./colab-branding-slider-item.component.scss']
})
export class ColabBrandingSliderItemComponent implements OnInit {
  @Input() image: string;
  @Input() imageAlt: string;
  @Input() instagram: string;
  @Input() class: string;
  isLabelVisible: boolean;
  constructor() {
    this.image = '';
    this.imageAlt = '';
    this.instagram = '';
    this.isLabelVisible = false;
    this.class = '';
   }

  ngOnInit() {
  }

  changeLabelVisibility(action: string){
    if(action === 'hide'){
      this.isLabelVisible = false;
    }else{
      this.isLabelVisible = true;
    }
  }

}
