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
    switch (this.page) {
      case Page.Compass:
        return this.getCompassText();
      case Page.Stamp:
        return this.getStampText();
      case Page.Colab:
        return this.getColabtext();
      case Page.CultureGuide:
        return this.getCultureGuide();
      case Page.BrandManual:
        return this.getBrandManual();
      case Page.Stamp:
        return this.getStamp();
      case Page.Tree:
        return this.getTree();
      case Page.Colab:
        return this.getColabtext();
      case Page.Magazine:
        return this.getMagazineText();
    }
    return '<p>No Text</p>';
  }
  getStampText(): string {
    return `<p>A mesma (e única consciência) que opera no macrocosmo, opera no microcosmo. Essa uma só consciência (a do universo), se repete em cada desdobramento dela mesma. Cada 'coisa viva' possui o mesmo padrão inteligente e natural de operar, e os antigos descobriram isso observando a natureza. Se você contemplar a natureza, você poderá começar a entender como sua <strong>consciência natural</strong> opera.</p>
    <p>O principal dom da consciência é o dom da criação. Como não temos consciência divina,acabamoscriando situações e fatos que nos desequilibram, os ventos que nos tiram do nosso destino</p>`;
  }
  getCompassText(): string {
    // tslint:disable-next-line: max-line-length
    return `<p>O principal dom da consciência é o dom da criação. Como não temos consciência divina, acabamos criando situações e fatos que nos desequilibram, os ventos que nos tiram do nosso destino.</p><p>Esse é o motivo pelo qual criamos a 'Bússola'. Uma ferramenta simples e profunda. Um resgate ao <strong>verdadeiro compromisso</strong> que cada Ser veio entregar a si, e ao mundo.</p>`  }
  getColabtext(): string{
    return `<p>A arte como expressão pura do Ser.</p><p>A arte que fala pelas ruas, pelas roupas, pelos cartazes, pelos painéis. A arte como ferramenta de transformação, como ferramenta de ação em um mundo (ainda) tão carente de amor. <strong>Desburocratizar o afeto</strong>, eis a meta.</p>`;
  }
  getCultureGuide(): string{
    return `<p>Seu uso destina.se ao <strong>alinhamento</strong> de cada pessoa (Ser) que habita esse campo chamado 1%, com o objetivo de unir.mo.nos dentro de um contexto crenças e valores, que, minimamente partilha.se.</p><p> Uma família de aprendizes que se move por um único propósito e energia: iluminar dentro, para brilhar fora (não existe fora).</p>`;
  }
  getBrandManual(): string{
    return `<p>O nosso Manual busca apresentar, de forma clara e objetiva, todos os <strong>elementos de linguagem</strong> que utilizamos para manifestar com nobreza, a essência da nossa missão.</p>`;
  }
  getStamp(): string{
    return `<p>Uma <strong>certificação social</strong>, que possibilita que as intenções de uma empresa em fazer parte de um mundo melhor, se concretize em ações.</p>`
  }
  getTree(): string{
    return `<p>Uma analogia apresentada através de uma metodologia de cartas.</p><p>Uma <strong>ferramenta</strong> que tem como inspiração, um fragmento da inteligência natural, da consciência divina. <i>Clareza, organização, movimento, conectividade, impermanência, ciclicidade.</i></p>`;
  }
  getMagazineText(): string{
    return `<p>Só tivemos a oportunidade de celebrar os nossos 10 anos de história, porque centenas (quiçá milhares) de mãos entregaram a sua energia e o seu tempo em prol do nosso ‘campo’. </p><p>12/12/2017: um dia atípico, único e intenso.</p><p>Esse ícone aqui, é para <strong>agradecer a todas as pessoas</strong> que já deixaram um pouco (e um muito) de si, em nossa casa.</p>`;
  }
}
