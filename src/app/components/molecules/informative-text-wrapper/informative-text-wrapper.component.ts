import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-informative-text-wrapper',
  templateUrl: './informative-text-wrapper.component.html',
  styleUrls: ['./informative-text-wrapper.component.scss']
})
export class InformativeTextWrapperComponent implements OnInit {
  @Input() page!: Page;
  @Input() sectionTitle: string;
  @Input() sectionText: string;
  constructor() {
    this.sectionTitle = 'No title';
    this.sectionText = '<p>No text</p>';
  }

  ngOnInit() {
    this.sectionTitle = this.getThisSectionTitle();
    this.sectionText = this.getCompassText();
  }

  getThisSectionTitle(): string {
    switch (this.page) {
      case Page.Compass:
        return this.getCompassTitle();
    }
    return 'No Title';
  }
  getThisSectionText(): string {
    switch (this.page) {
      case Page.Compass:
        return this.getCompassText();
    }
    return 'No Title';
  }
  getCompassTitle(): string {
    return 'Integração de corpo, alma e destino.';
  }
  getCompassText(): string {
    // tslint:disable-next-line: max-line-length
    return `<p>A mesma (e única consciência) que opera no macrocosmo, opera no microcosmo. Essa uma só consciência (a do universo), se repete em cada desdobramento dela mesma. Cada 'coisa viva' possui o mesmo padrão inteligente e natural de operar, e os antigos descobriram isso observando a natureza. Se você contemplar a natureza, você poderá começar a entender como sua <u>consciência natural</u> opera.</p>
    <p>O principal dom da consciência é o dom da criação. Como não temos consciência divina, acabamos criando situações e fatos que nos desequilibram, os ventos que nos tiram do nosso destino.</p>
    <p>A purificação da consciência, é uma correção, um alinhamento para que possamos entregar ao mundo os nossos do ns e talentos , a nossa luz . </p>
    <p>Esse é o motivo pelo qual criamos a 'Bússola'. Uma ferramenta simples e profunda.Um resgate ao verdadeiro compromisso que cada Ser veio entregar ao mundo.</p>`;
  }

}