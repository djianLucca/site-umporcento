import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-tag',
  templateUrl: './button-tag.component.html',
  styleUrls: ['./button-tag.component.scss']
})
export class ButtonTagComponent implements OnInit {
  @Input() btnText: string;
  @Input() btnAction: (event: any) => void;
  @Input() id: string | undefined;
  @Input() class: string;
  @Input() disabled: boolean;

  constructor() {
    this.btnAction = this.noDefinedFunction;
    this.class = 'btn';
    this.btnText = '';
    this.disabled = false;
  }

  ngOnInit() {
  }

  noDefinedFunction() {
    console.log('No function defined for this button.');
  }
  

}
