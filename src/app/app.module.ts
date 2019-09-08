import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoWrapperComponent } from './components/molecules/video-wrapper/video-wrapper.component';
import { DefaultIconPageComponent } from './components/templates/default-icon-page/default-icon-page.component';
import { PageBackgroundComponent } from './components/organisms/page-background/page-background.component';
import { VideoTagComponent } from './components/atoms/video-tag/video-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoWrapperComponent,
    DefaultIconPageComponent,
    PageBackgroundComponent,
    VideoTagComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
