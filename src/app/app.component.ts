import { Component, OnInit, NgModule } from '@angular/core';

import { DefaultPageComponent } from './components/pages/default-page/default-page.component';
import { RouterOutlet } from '@angular/router';
import { fader, slider } from './services/animations/generalAnimations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider,
    fader
  ]
})
@NgModule({
  imports: [DefaultPageComponent]
})
export class AppComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }
  prepareRoute(outlet: RouterOutlet) {
    // tslint:disable-next-line: no-string-literal
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
