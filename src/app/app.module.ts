import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { VideoWrapperComponent } from './components/molecules/video-wrapper/video-wrapper.component';
import { DefaultIconPageComponent } from './components/templates/default-icon-page/default-icon-page.component';
import { PageBackgroundComponent } from './components/organisms/page-background/page-background.component';
import { VideoTagComponent } from './components/atoms/video-tag/video-tag.component';
import { ImageTagComponent } from './components/atoms/image-tag/image-tag.component';
import { IconPageWrapperComponent } from './components/molecules/icon-page-wrapper/icon-page-wrapper.component';
import { IconPageContentComponent } from './components/organisms/icon-page-content/icon-page-content.component';
import { ButtonTagComponent } from './components/atoms/button-tag/button-tag.component';
import { IconTagComponent } from './components/atoms/icon-tag/icon-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoWrapperComponent,
    DefaultIconPageComponent,
    PageBackgroundComponent,
    VideoTagComponent,
    ImageTagComponent,
    IconPageWrapperComponent,
    IconPageContentComponent,
    ButtonTagComponent,
    IconTagComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
