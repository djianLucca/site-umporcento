import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DefaultIconPageComponent } from './components/templates/default-icon-page/default-icon-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
@NgModule({
  imports: [DefaultIconPageComponent]
})
export class AppComponent implements OnInit {
  title = 'site-umporcento';

  constructor(@Inject(DOCUMENT) private document : Document) {

  }

  ngOnInit() {
    console.log(this.document.URL);
  }
}
