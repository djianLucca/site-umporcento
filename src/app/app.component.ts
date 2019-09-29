import { Component, OnInit, NgModule } from '@angular/core';

import { DefaultPageComponent } from './components/pages/default-page/default-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@NgModule({
  imports: [DefaultPageComponent]
})
export class AppComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }


}
