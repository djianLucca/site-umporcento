import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  mask: string;
  @Output()
  ready: EventEmitter<boolean>;
  
  constructor() {
    this.value = '';
    this.mask = '';
    this.ready = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  getThisMask(name:string): string{
    switch (name) {
      case 'celular':
        return '00 00000-0000';
      case 'email':
        return 'A*@A*.SSS?.SS'
      default:
        return '';
    }
  }

  getThisPattern(name:string): RegExp{
    switch (name) {
      case 'celular':
        return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
      case 'email':
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      default:
        return /.*/;
        break;
    }
  }

  validateInput(event: Event, pattern: RegExp): boolean{
    const target = event.target as HTMLInputElement;
    if(pattern.test(target.value) && target.value !== ''){
      target.classList.remove('wrong');
      target.classList.add('validated');
      this.ready.emit(true);
      return true;
    }else{
      target.classList.remove('validated');
      target.classList.add('wrong');
    }
    return false;
  }

  validateTextArea(event: Event): boolean{
    const target = event.target as HTMLTextAreaElement;
    if( target.value !== ''){
      target.classList.remove('wrong');
      target.classList.add('validated');
      this.ready.emit(true);
      return true;
    }else{
      target.classList.remove('validated');
      target.classList.add('wrong');
      this.ready.emit(true);
    }
    return false;
  }

}
