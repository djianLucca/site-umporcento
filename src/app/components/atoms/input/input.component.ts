import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type!: 'text' | 'text-area';
  @Input() name!: string;
  @Input() label!: string;
  @Input() value: string;
  @Input() callOnKeyUp!: (event: Event) => {};
  
  constructor() {
    this.value = '';
  }

  ngOnInit() {
  }

}
