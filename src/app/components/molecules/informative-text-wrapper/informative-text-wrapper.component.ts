import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informative-text-wrapper',
  templateUrl: './informative-text-wrapper.component.html',
  styleUrls: ['./informative-text-wrapper.component.scss']
})
export class InformativeTextWrapperComponent implements OnInit {
  @Input() sectionTitle: string;
  @Input() sectionText: string;
  constructor() {
    this.sectionTitle = 'No title';
    this.sectionText = '<p>No text</p>';
  }

  ngOnInit() {
  }

}
