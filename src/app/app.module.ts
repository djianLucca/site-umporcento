import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { InViewportModule } from '@thisissoon/angular-inviewport';

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
import { TimelinePageMidleRowComponent } from './components/organisms/timeline-page-midle-row/timeline-page-midle-row.component';
import { TimelineIconsMenuComponent } from './components/molecules/timeline-icons-menu/timeline-icons-menu.component';
import { TimelineMenuIconComponent } from './components/atoms/timeline-menu-icon/timeline-menu-icon.component';
import { TimelineWrapperComponent } from './components/organisms/timeline-wrapper/timeline-wrapper.component';
import { TimelineSimpleImageTextComponent } from './components/molecules/timeline-simple-image-text/timeline-simple-image-text.component';
import { TimelineSimpleImageLeftTextComponent } from './components/molecules/timeline-simple-image-left-text/timeline-simple-image-left-text.component';
import { TimelineItemIconsWrapperComponent } from './components/molecules/timeline-item-icons-wrapper/timeline-item-icons-wrapper.component';
import { TimelineSimplePersonImageTextComponent } from './components/molecules/timeline-simple-person-image-text/timeline-simple-person-image-text.component';
import { TimelineGaleryItemComponent } from './components/molecules/timeline-galery-item/timeline-galery-item.component';
import { TimelineGroupGalerySectionComponent } from './components/molecules/timeline-group-galery-section/timeline-group-galery-section.component';
import { TimlineGroupConversionsComponent } from './components/molecules/timline-group-conversions/timline-group-conversions.component';
import { TimelineGroupSealComponent } from './components/molecules/timeline-group-seal/timeline-group-seal.component';
import { TopBarIdentifierInformativePageComponent } from './components/molecules/top-bar-identifier-informative-page/top-bar-identifier-informative-page.component';
import { SectionTitleComponent } from './components/atoms/section-title/section-title.component';
import { TimelineItemRowComponent } from './components/organisms/timeline-item-row/timeline-item-row.component';
import { SideLineMidlePageComponent } from './components/atoms/side-line-midle-page/side-line-midle-page.component';
import { ContactPageContentComponent } from './components/templates/contact-page-content/contact-page-content.component';
import { ContactPageMidleRowComponent } from './components/organisms/contact-page-midle-row/contact-page-midle-row.component';
import { ContactFormComponent } from './components/molecules/contact-form/contact-form.component';
import { InputComponent } from './components/atoms/input/input.component';
import { UmporcentoInfoComponent } from './components/atoms/umporcento-info/umporcento-info.component';
import { ErrorPageComponent } from './components/templates/error-page/error-page.component';
import { ErrorPageComponentComponent } from './components/organisms/error-page-component/error-page-component.component';
import { GuardiansPageContentComponent } from './components/templates/guardians-page-content/guardians-page-content.component';
import { GuardiansPageMidleRowComponent } from './components/organisms/guardians-page-midle-row/guardians-page-midle-row.component';
import { PersonImageInstagramComponent } from './components/molecules/person-image-instagram/person-image-instagram.component';
import { UsPageContentComponent } from './components/templates/us-page-content/us-page-content.component';
import { UsPageMidleRowComponent } from './components/organisms/us-page-midle-row/us-page-midle-row.component';
import { NetworkPageContentComponent } from './components/templates/network-page-content/network-page-content.component';
import { NetworkPageMidleRowComponent } from './components/organisms/network-page-midle-row/network-page-midle-row.component';
import { BrandingImageInformationComponent } from './components/molecules/branding-image-information/branding-image-information.component';
import { StampPageContentComponent } from './components/templates/stamp-page-content/stamp-page-content.component';
import { StampPageMidleRowComponent } from './components/organisms/stamp-page-midle-row/stamp-page-midle-row.component';
import { StampImageSliderComponent } from './components/organisms/stamp-image-slider/stamp-image-slider.component';
import { StampSliderItemsComponent } from './components/molecules/stamp-slider-items/stamp-slider-items.component';
import { TalksPageContentComponent } from './components/templates/talks-page-content/talks-page-content.component';
import { TalksPageMidleRowComponent } from './components/organisms/talks-page-midle-row/talks-page-midle-row.component';
import { TalksSliderImagesComponent } from './components/molecules/talks-slider-images/talks-slider-images.component';
import { DropdownCounterComponent } from './components/molecules/dropdown-counter/dropdown-counter.component';
import { ColabPageContentComponent } from './components/templates/colab-page-content/colab-page-content.component';
import { ColabPageMidleRowComponent } from './components/organisms/colab-page-midle-row/colab-page-midle-row.component';
import { ColabSliderBrandsComponent } from './components/organisms/colab-slider-brands/colab-slider-brands.component';
import { ColabBrandingSliderItemComponent } from './components/molecules/colab-branding-slider-item/colab-branding-slider-item.component';
import { ColabArtSliderComponent } from './components/organisms/colab-art-slider/colab-art-slider.component';
import { OpenMenuContentComponent } from './components/templates/open-menu-content/open-menu-content.component';
import { MenuMidleRowComponent } from './components/organisms/menu-midle-row/menu-midle-row.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoadTimelineItemsComponent } from './components/atoms/load-timeline-items/load-timeline-items.component';
import { TimelineFullPageItemComponent } from './components/molecules/timeline-full-page-item/timeline-full-page-item.component';
import { TimelineSearchBarComponent } from './components/molecules/timeline-search-bar/timeline-search-bar.component';
import { RefreshTimelineBtnComponent } from './components/atoms/refresh-timeline-btn/refresh-timeline-btn.component';
import { TimelineOpeningItemComponent } from './components/molecules/timeline-opening-item/timeline-opening-item.component';
import { ConnectionLineComponent } from './components/atoms/connection-line/connection-line.component';
import { MenuContentComponent } from './components/molecules/menu-content/menu-content.component';
import { ColabAreaSliderInputGroupComponent } from './components/molecules/colab-area-slider-input-group/colab-area-slider-input-group.component';

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
    TimelinePageContentComponent,
    TimelinePageMidleRowComponent,
    TimelineIconsMenuComponent,
    TimelineMenuIconComponent,
    TimelineWrapperComponent,
    TimelineSimpleImageTextComponent,
    TimelineSimpleImageLeftTextComponent,
    TimelineItemIconsWrapperComponent,
    TimelineSimplePersonImageTextComponent,
    TimelineGaleryItemComponent,
    TimelineGroupGalerySectionComponent,
    TimlineGroupConversionsComponent,
    TimelineGroupSealComponent,
    TopBarIdentifierInformativePageComponent,
    SectionTitleComponent,
    TimelineItemRowComponent,
    SideLineMidlePageComponent,
    ContactPageContentComponent,
    ContactPageMidleRowComponent,
    ContactFormComponent,
    InputComponent,
    UmporcentoInfoComponent,
    ErrorPageComponent,
    ErrorPageComponentComponent,
    GuardiansPageContentComponent,
    GuardiansPageMidleRowComponent,
    PersonImageInstagramComponent,
    UsPageContentComponent,
    UsPageMidleRowComponent,
    NetworkPageContentComponent,
    NetworkPageMidleRowComponent,
    BrandingImageInformationComponent,
    StampPageContentComponent,
    StampPageMidleRowComponent,
    StampImageSliderComponent,
    StampSliderItemsComponent,
    TalksPageContentComponent,
    TalksPageMidleRowComponent,
    TalksSliderImagesComponent,
    DropdownCounterComponent,
    ColabPageContentComponent,
    ColabPageMidleRowComponent,
    ColabSliderBrandsComponent,
    ColabBrandingSliderItemComponent,
    ColabArtSliderComponent,
    OpenMenuContentComponent,
    MenuMidleRowComponent,
    LoadTimelineItemsComponent,
    TimelineFullPageItemComponent,
    TimelineSearchBarComponent,
    RefreshTimelineBtnComponent,
    TimelineOpeningItemComponent,
    ConnectionLineComponent,
    MenuContentComponent,
    ColabAreaSliderInputGroupComponent,
  ],
  imports: [
  BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    NgImageSliderModule,
    NgxMaskModule.forRoot(),
    NgxUsefulSwiperModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
