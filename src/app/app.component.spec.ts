import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {DefaultIconPageComponent} from './components/pages/default-page/default-page.component';
import { PageBackgroundComponent } from './components/organisms/page-background/page-background.component';
import { VideoWrapperComponent } from './components/molecules/video-wrapper/video-wrapper.component';
import { VideoTagComponent } from './components/atoms/video-tag/video-tag.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        DefaultIconPageComponent,
        PageBackgroundComponent,
        VideoWrapperComponent,
        VideoTagComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
