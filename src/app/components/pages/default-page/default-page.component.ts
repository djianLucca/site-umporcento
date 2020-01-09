import { Component, OnInit } from '@angular/core';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { StateService } from 'src/app/services/state.service';
import { StateManipulatorService } from 'src/app/services/state-manipulator.service';
import { StateInitialiserService } from 'src/app/services/state-initialiser.service';
import { InternalRoutesService } from 'src/app/services/internal-routes.service';
import { InternalRoutesHandlerService } from 'src/app/services/internal-routes-handler.service';
import { Page } from 'src/app/services/enums/pageenum';
import { HttpClient } from '@angular/common/http';
import { ContactFormService } from 'src/app/services/contact-form.service';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {
  state: StateService;
  stateManipulator: StateManipulatorService;
  internalRouter: InternalRoutesHandlerService;
  morningPage: PageSectionStatus;
  contactForm: ContactFormService;
  constructor(private http: HttpClient) {
    this.state = new StateInitialiserService().getState();
    this.stateManipulator = new StateManipulatorService(this.state, this.http);
    this.morningPage = PageSectionStatus.Morning;
    this.contactForm = new ContactFormService(http);
    this.internalRouter = new InternalRoutesHandlerService([
      new InternalRoutesService('/manha', this.switchToMorning.bind(this)),
      new InternalRoutesService('/tarde', this.switchToAfternoon.bind(this)),
      new InternalRoutesService('/noite', this.switchToNight.bind(this)),
      new InternalRoutesService('/manha/bussola', this.switchToCompass.bind(this)),
      new InternalRoutesService('/manha/manual-da-marca', this.switchToBrandManual.bind(this)),
      new InternalRoutesService('/manha/dez-anos', this.switchToTenYears.bind(this)),
      new InternalRoutesService('/manha/guia-de-cultura', this.switchToCultureGuide.bind(this)),
      new InternalRoutesService('/manha/arvore', this.switchToTree.bind(this)),
      new InternalRoutesService('/manha/guardioes', this.switchToGuardians.bind(this)),
      new InternalRoutesService('/tarde/linha-do-tempo', this.switchToTimeline.bind(this)),
      new InternalRoutesService('/noite/contato', this.switchToContact.bind(this)),
      new InternalRoutesService('/noite/nos', this.switchToUs.bind(this)),
      new InternalRoutesService('/noite/rede', this.switchToNetwork.bind(this)),
      new InternalRoutesService('/noite/selo', this.switchToStamp.bind(this)),
      new InternalRoutesService('/noite/palestras', this.switchToTalks.bind(this)),
      new InternalRoutesService('/noite/colab', this.switchToColab.bind(this)),
    ]);
  }

  ngOnInit() {
    this.internalRouter.takeAction(window.location.pathname);
  }
  updateTimeline(){
    this.stateManipulator.setTimelineInitalStatus()
  }

  isFloatingIconPage(): boolean {
    if (this.state.page === Page.Morning
      || this.state.page === Page.Afternoon
      || this.state.page === Page.Night) {
      return true;
    }
    return false;
  }
  isInformativePage(): boolean{
    return this.state.page === Page.Compass || this.state.page === Page.BrandManual || this.state.page === Page.Magazine || this.state.page === Page.CultureGuide || this.state.page === Page.Tree;
  }

  isTimelinePage(): boolean{
    return this.state.page === Page.Timeline;
  }

  isContactPage(): boolean{
    return this.state.page === Page.Contact;
  }
  
  isGuardiansPage(): boolean{
    return this.state.page === Page.Guardians;
  }

  isUsPage(): boolean{
    return this.state.page === Page.Us;
  }

  isNetworkPage(): boolean{
    return this.state.page === Page.Network;
  }

  isStampPage(): boolean{
    return this.state.page === Page.Stamp;
  }

  isTalksPage(): boolean{
    return this.state.page === Page.Talks;
  }

  isColabPage() :boolean{
    return this.state.page === Page.Colab;
  }
  
  changeSection(pageSection: PageSectionStatus) {
    this.state = this.stateManipulator.changePageSection(pageSection);
  }
  changePage(page: Page) {
    this.state = this.stateManipulator.changePage(page);
  }
  changeBackground(pageSection: PageSectionStatus) {
    this.state = this.stateManipulator.changePageBackground(pageSection);
  }

  switchToMorning() {
    this.changeSection(PageSectionStatus.Morning);
  }

  switchToAfternoon() {
    this.changeSection(PageSectionStatus.Afternoon);
  }
  switchToNight() {
    this.changeSection(PageSectionStatus.Night);
  }
  switchToCompass() {
    this.changePage(Page.Compass);
    this.changeBackground(PageSectionStatus.Morning);
  }

  switchToBrandManual() {
    this.changePage(Page.BrandManual);
    this.switchToMorning();
    this.changeBackground(PageSectionStatus.Morning);
  }

  switchToTenYears() {
    this.changePage(Page.Magazine);
    this.switchToMorning();
    this.changeBackground(PageSectionStatus.Morning);
  }
  switchToCultureGuide(){
    this.changePage(Page.CultureGuide);
    this.switchToMorning();
    this.changeBackground(PageSectionStatus.Morning);
  }
  switchToTree(){
    this.changePage(Page.Tree);
    this.switchToMorning();
    this.changeBackground(PageSectionStatus.Morning);
  }
  switchToTimeline() {
    this.changePage(Page.Timeline);
    this.switchToAfternoon();
    this.changeBackground(PageSectionStatus.Afternoon);
  }

  switchToGuardians() {
    this.changePage(Page.Guardians);
    this.switchToMorning();
    this.changeBackground(PageSectionStatus.Morning)
  }

  switchToContact() {
    this.changePage(Page.Contact);
    this.switchToNight();
    this.changeBackground(PageSectionStatus.Night)
  }

  switchToUs() {
    this.changePage(Page.Us);
    this.switchToNight();
    this.changeBackground(PageSectionStatus.Night);
  }

  switchToNetwork(){
    this.changePage(Page.Network);
    this.switchToNight();
    this.changeBackground(PageSectionStatus.Night);
  }

  switchToStamp(){
    this.changePage(Page.Stamp);
    this.switchToNight();
    this.changeBackground(PageSectionStatus.Night);
  }

  switchToTalks(){
    this.changePage(Page.Talks);
    this.switchToNight();
    this.changeBackground(PageSectionStatus.Night);
  }

  switchToColab(){
    this.changePage(Page.Colab);
    this.switchToNight();
    this.changeBackground(PageSectionStatus.Night);
  }
}
