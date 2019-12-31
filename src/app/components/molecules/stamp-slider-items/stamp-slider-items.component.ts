import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stamp-slider-items',
  templateUrl: './stamp-slider-items.component.html',
  styleUrls: ['./stamp-slider-items.component.scss']
})
export class StampSliderItemsComponent implements OnInit {
  @Input() image!: string;
  @Input() social!: string;
  @Input() redirectTo!: string;
  showLabel: boolean;
  constructor() { 
    this.showLabel = false;
  }

  ngOnInit() {
  }
  
  navigateTo(url :string){
    window.open(url, "_blank");
  }

  changeLabelVisibility(action: string){
    if(action === 'hide'){
      this.showLabel = false;
    }else{
      this.showLabel = true;
    }
  }
}
