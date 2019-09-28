import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppComponent } from './app.component';
import { VideoWrapperComponent } from './components/molecules/video-wrapper/video-wrapper.component';
import { DefaultIconPageComponent } from './components/pages/default-icon-page/default-icon-page.component';
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

@NgModule({
  declarations: [
    AppComponent,
    VideoWrapperComponent,
    DefaultIconPageComponent,
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
    LoadSvgComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    InlineSVGModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
