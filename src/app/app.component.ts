import { Component, OnInit, NgModule } from '@angular/core';

import { DefaultIconPageComponent } from './components/pages/default-icon-page/default-icon-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@NgModule({
  imports: [DefaultIconPageComponent]
})
export class AppComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }


}
