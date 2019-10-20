import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-menu-icon',
  templateUrl: './timeline-menu-icon.component.html',
  styleUrls: ['./timeline-menu-icon.component.scss']
})
export class TimelineMenuIconComponent implements OnInit {
  @Input() id: string;
  @Input() isOn: boolean;
  @Input() class: string;
  @Input() label: string;
  labelStyle: {display: string}
  constructor() { 
    this.id = '';
    this.isOn = false;
    this.class = '';
    this.label = 'No Label';
    this.labelStyle = {display: 'none'}
  }

  ngOnInit() {
  }

  toggleLabel(){
    if(this.labelStyle.display === 'none'){
      this.labelStyle.display = 'block'
    }else{
      this.labelStyle.display = 'none'
    }
  }
}
