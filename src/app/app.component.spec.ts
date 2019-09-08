import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {DefaultIconPageComponent} from './components/templates/default-icon-page/default-icon-page.component';
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

  it(`should have as title 'site-umporcento'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('site-umporcento');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('site-umporcento app is running!');
  });
});
