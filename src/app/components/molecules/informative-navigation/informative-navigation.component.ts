import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informative-navigation',
  templateUrl: './informative-navigation.component.html',
  styleUrls: ['./informative-navigation.component.scss']
})
export class InformativeNavigationComponent implements OnInit {
  @Input() title!: string;
  constructor() {
  }

  ngOnInit() {
  }

}
