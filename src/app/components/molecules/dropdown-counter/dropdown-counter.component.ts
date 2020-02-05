import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-counter',
  templateUrl: './dropdown-counter.component.html',
  styleUrls: ['./dropdown-counter.component.scss']
})
export class DropdownCounterComponent implements OnInit {
  @Input() maxCounter: number;
  @Input() class: string;
  lastNumber: number;
  nextNumber: number;
  flipcardClassOne: string;
  flipcardClassTwo: string;
  flipNumber: number;
  flipNumberTwo: number;
  constructor() { 
    this.class = '';
    this.maxCounter = 10;
    this.lastNumber = 0;
    this.nextNumber = 0;
    this.flipNumber = 0;
    this.flipcardClassOne = 'unfold';
    this.flipcardClassTwo = 'fold';
    this.flipNumberTwo = 0;
  }

  ngOnInit() {
    window.setInterval(this.changeNumbers.bind(this), 300);
  }

  changeNumbers(){
    if(this.nextNumber === this.maxCounter){
      return;
    }
    this.lastNumber = this.nextNumber;
    this.nextNumber += 1;
    if(this.lastNumber === this.nextNumber){
      this.lastNumber -= 1;
    }
    if(this.changeClasss(this.flipcardClassOne) === 'unfold'){
      this.flipNumber = this.nextNumber;
    }
    if(this.changeClasss(this.flipcardClassTwo) === 'unfold'){
      this.flipNumberTwo = this.nextNumber;
    }
    this.flipcardClassOne = this.changeClasss(this.flipcardClassOne);
    this.flipcardClassTwo = this.changeClasss(this.flipcardClassTwo);
  }


  changeClasss(element: string): string{
    if(element === 'fold'){
      return 'unfold'
    }

    return 'fold';
  }

}
