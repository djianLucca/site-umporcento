import { Component, Input, OnChanges } from '@angular/core';
import { FloatingIconsService } from 'src/app/services/floating-icons.service';
import { PageSectionStatus } from 'src/app/services/enums/pageSectionStatusenum';
import { FloatingIconImage } from 'src/app/services/enums/floatingiconimageenum';
import { Router } from '@angular/router';

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
  animIcon: boolean;

  constructor(private router: Router) {
    this.imageSrc = '/assets/img/selo.jpg';
    this.floatingIcons = [];
    this.pageStatus = PageSectionStatus.Night;
    this.showLabel = false;
    this.defaultClass = 'contianer_icon';
    this.animIcon = false;
  }

  ngOnChanges() {
    this.defaultClassBuilt = this.defaultClass + ' ' + this.pageStatus;
  }

  animateIcon(){
    console.log('aqui');
    this.animIcon = true;
    console.log(this.animIcon);
  }
  navigateTo(route: string){
    
    setTimeout(() => {this.router.navigate([route])}, 800);
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
        return '/manha/guia-de-cultura';
      case 'Guardiões':
        return '/manha/guardioes';
      case 'Linha do Tempo':
        return '/tarde/linha-do-tempo';
      case 'Contato':
        return '/noite/contato';
      case 'Nós':
        return '/noite/nos';
      case 'Rede':
        return '/noite/rede';
      case 'Selo':
        return '/noite/selo';
      case 'Palestras':
        return '/noite/palestras';
      case 'Co.lab':
        return '/noite/colab';
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

  openGabw(){
    window.open('https://gabw.cc/', "_blank");
  }

}
