import { Component, OnInit, Inject } from '@angular/core';
import { isNgContent } from '@angular/compiler';
import { inject } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'site-umporcento';

  constructor(@Inject(DOCUMENT) private document, ) {

  }

  ngOnInit() {
    console.log(this.document.URL);
  }
}
