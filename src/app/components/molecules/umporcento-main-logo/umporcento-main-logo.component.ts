import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-umporcento-main-logo',
  templateUrl: './umporcento-main-logo.component.html',
  animations:[
    trigger('expandWidth',[
      transition(':enter', [
        style({ width: '0em', opacity: '0' }),
        animate('500ms', style({ width: '28%', opacity: '1' }))
      ]),
      transition(':leave', [
        style({ width: '28%', opacity: '1' }),
        animate('500ms', style({ width: '0', opacity: '0' }))
      ])
    ]),
    trigger('expandHeight',[
      transition(':enter', [
          style({ height: '0px', opacity: '0' }),
          animate('500ms', style({ height: '30%', opacity: '1' }))
      ]),
      transition(':leave', [
        style({ height: '30%', opacity: '1' }),
        animate('500ms', style({ height: '0', opacity: '0' }))
    ])
    ])
  ],
  styleUrls: ['./umporcento-main-logo.component.scss']
})
export class UmporcentoMainLogoComponent implements OnInit {
  @Input() logoUmporcento: string;
  @Input() logoUmporcentoAlt: string;
  @Input() logoUmporcentoId: string;
  showAnimation: boolean;

  constructor() { 
    this.logoUmporcento = '';
    this.logoUmporcentoAlt = '';
    this.logoUmporcentoId = '';
    this.showAnimation = false;
  }

  ngOnInit() {
  }

  toggleAnimation(status: boolean){
    this.showAnimation = status;
  }

}
