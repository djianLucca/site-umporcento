import { Component, Input, OnChanges } from '@angular/core';
import { FloatingIconsService } from 'src/app/services/floating-icons.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { FloatingIconImage } from 'src/app/services/enums/floatingiconimageenum';

@Component({
  selector: 'app-floating-icons-wrapper',
  templateUrl: './floating-icons-wrapper.component.html',
  styleUrls: ['./floating-icons-wrapper.component.scss']
})
export class FloatingIconsWrapperComponent implements OnChanges {
  imageSrc: string;
  @Input() floatingIcons: FloatingIconsService[];
  @Input() pageStatus: PageSectionStatus;
  showLabel: boolean;
  defaultClass: string;
  defaultClassBuilt!: string;

  constructor() {
    this.imageSrc = '/assets/img/selo.jpg';
    this.floatingIcons = [];
    this.pageStatus = PageSectionStatus.Night;
    this.showLabel = false;
    this.defaultClass = 'contianer_icon';
  }

  ngOnChanges() {
    this.defaultClassBuilt = this.defaultClass + ' ' + this.pageStatus;
  }

  getRouterLinkPasedOnLabel(label: string){
    switch (label) {
      case 'bússola':
        return '/manha/bussola';
      case 'Manual da marca':
        return '/manha/manual-da-marca';
      case 'dez anos':
        return '/manha/dez-anos';
      case 'árvore':
            return '/manha/arvore'
      case 'guia de cultura':
        return '/manha/guia-de-cultura'
      case 'Linha do Tempo':
        return '/tarde/linha-do-tempo';
      case 'Contato':
        return '/noite/contato';
      case 'Guardiões':
        return '/manha/guardioes';
    }
    return '/';
  }
  toggleLabel(image: FloatingIconImage, value: string) {
    this.floatingIcons.forEach(element => {
      if (image === element.image) {
        element.labelStyle.visibility = value;
      }
    });
  }

}
