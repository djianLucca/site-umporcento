import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DefaultIconPageComponent } from './components/templates/default-icon-page/default-icon-page.component';
import { StateService } from './services/state.service';
import { StateInitialiserService } from './services/state-initialiser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@NgModule({
  imports: [DefaultIconPageComponent]
})
export class AppComponent implements OnInit {
  title: string;
  state: StateService;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.state = new StateInitialiserService().getState();
    this.title = this.state.title;
  }

  ngOnInit() {
    console.log(this.document.URL);
  }
}
