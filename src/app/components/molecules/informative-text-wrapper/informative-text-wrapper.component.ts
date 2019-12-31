import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/services/enums/pageenum';

@Component({
  selector: 'app-informative-text-wrapper',
  templateUrl: './informative-text-wrapper.component.html',
  styleUrls: ['./informative-text-wrapper.component.scss']
})
export class InformativeTextWrapperComponent implements OnInit {
  @Input() page!: Page;
  @Input() sectionText: string;
  constructor() {
    this.sectionText = '<p>No text</p>';
  }

  ngOnInit() {
    this.sectionText = this.getThisSectionText();
  }

  getThisSectionText(): string {
    console.log(this.page);
    switch (this.page) {
      case Page.Compass:
        return this.getCompassText();
      case Page.Stamp:
        return this.getStampText();
    }
    return '<p>No Text</p>';
  }
  getStampText(): string {
    return `<p>A mesma (e única consciência) que opera no macrocosmo, opera no microcosmo. Essa uma só consciência (a do universo), se repete em cada desdobramento dela mesma. Cada 'coisa viva' possui o mesmo padrão inteligente e natural de operar, e os antigos descobriram isso observando a natureza. Se você contemplar a natureza, você poderá começar a entender como sua <strong>consciência natural</strong> opera.</p>
    <p>O principal dom da consciência é o dom da criação. Como não temos consciência divina,acabamoscriando situações e fatos que nos desequilibram, os ventos que nos tiram do nosso destino</p>`;
  }
  getCompassText(): string {
    // tslint:disable-next-line: max-line-length
    return `<p>A mesma (e única consciência) que opera no macrocosmo, opera no microcosmo. Essa uma só consciência (a do universo), se repete em cada desdobramento dela mesma. Cada 'coisa viva' possui o mesmo padrão inteligente e natural de operar, e os antigos descobriram isso observando a natureza. Se você contemplar a natureza, você poderá começar a entender como sua <u>consciência natural</u> opera.</p>
    <p>O principal dom da consciência é o dom da criação. Como não temos consciência divina, acabamos criando situações e fatos que nos desequilibram, os ventos que nos tiram do nosso destino.</p>
    <p>A purificação da consciência, é uma correção, um alinhamento para que possamos entregar ao mundo os nossos do ns e talentos , a nossa luz . </p>
    <p>Esse é o motivo pelo qual criamos a 'Bússola'. Uma ferramenta simples e profunda.Um resgate ao verdadeiro compromisso que cada Ser veio entregar ao mundo.</p>`;
  }

}
