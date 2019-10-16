import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppComponent } from './app.component';
import { VideoWrapperComponent } from './components/molecules/video-wrapper/video-wrapper.component';
import { DefaultPageComponent } from './components/pages/default-page/default-page.component';
import { PageBackgroundComponent } from './components/organisms/page-background/page-background.component';
import { VideoTagComponent } from './components/atoms/video-tag/video-tag.component';
import { ImageTagComponent } from './components/atoms/image-tag/image-tag.component';
import { IconPageContentComponent } from './components/templates/icon-page-content/icon-page-content.component';
import { ButtonTagComponent } from './components/atoms/button-tag/button-tag.component';
import { IconTagComponent } from './components/atoms/icon-tag/icon-tag.component';
import { SvgTagComponent } from './components/atoms/svg-tag/svg-tag.component';
import { IconPageTopRowComponent } from './components/organisms/icon-page-top-row/icon-page-top-row.component';
import { IconPageMidleRowComponent } from './components/organisms/icon-page-midle-row/icon-page-midle-row.component';
import { IconPageBottomRowComponent } from './components/organisms/icon-page-bottom-row/icon-page-bottom-row.component';
import { PaletPageStatusComponent } from './components/atoms/palet-page-status/palet-page-status.component';
import { FloatingIconsWrapperComponent } from './components/molecules/floating-icons-wrapper/floating-icons-wrapper.component';
import { PaletsPageStatusWrapperComponent } from './components/molecules/palets-page-status-wrapper/palets-page-status-wrapper.component';
import { SocialIconsWrapperComponent } from './components/molecules/social-icons-wrapper/social-icons-wrapper.component';
import { LoadSvgComponent } from './components/atoms/load-svg/load-svg.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { InformativePageContentComponent } from './components/templates/informative-page-content/informative-page-content.component';
import { InformativePageMidleRowComponent } from './components/organisms/informative-page-midle-row/informative-page-midle-row.component';
import { MenuIconComponent } from './components/atoms/menu-icon/menu-icon.component';
import { InformativeTextWrapperComponent } from './components/molecules/informative-text-wrapper/informative-text-wrapper.component';
import { ImageSliderComponent } from './components/molecules/image-slider/image-slider.component';
import { DownloadBtnComponent } from './components/atoms/download-btn/download-btn.component';
import { InformativeNavigationComponent } from './components/molecules/informative-navigation/informative-navigation.component';
import { TimelinePageContentComponent } from './components/templates/timeline-page-content/timeline-page-content.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoWrapperComponent,
    DefaultPageComponent,
    PageBackgroundComponent,
    VideoTagComponent,
    ImageTagComponent,
    IconPageContentComponent,
    ButtonTagComponent,
    IconTagComponent,
    SvgTagComponent,
    IconPageTopRowComponent,
    IconPageMidleRowComponent,
    IconPageBottomRowComponent,
    PaletPageStatusComponent,
    FloatingIconsWrapperComponent,
    PaletsPageStatusWrapperComponent,
    SocialIconsWrapperComponent,
    LoadSvgComponent,
    NotFoundPageComponent,
    InformativePageContentComponent,
    InformativePageMidleRowComponent,
    MenuIconComponent,
    InformativeTextWrapperComponent,
    ImageSliderComponent,
    DownloadBtnComponent,
    InformativeNavigationComponent,
    TimelinePageContentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
