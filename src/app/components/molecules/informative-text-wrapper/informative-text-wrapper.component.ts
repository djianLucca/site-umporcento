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
    return `<p>uma <strong>social que possibilita</strong> que as intenções de uma empresa em fazer parte de um mundo melhor, se concretize em ações. um sistema criado para beneficiar /de forma recorrente/ o maior número de vidas possíveis. cultura social é a nossa bandeira. o nosso selo é conectado as <a href="http://www.agenda2030.com.br/" target="_blank" rel="noopener noreferrer">ODS</a> da ONU, uma missão planetária até o ano de 2030 para que possamos, como humanidade chegarmos vivos, sustentáveis e minimamente plenos. a <a href="assets/pdf/lei_difusão_da_inovacao.pdf" routerLinkActive="router-link-active"  target="_blank" rel="noopener noreferrer">lei da difusão da inovação</a> é o mapa do trajeto que estamos percorrendo. a versão é eternamente beta.</p><p>o aprender e o evoluir é uma constante por aqui.</p>`
  }
  getCompassText(): string {
    // tslint:disable-next-line: max-line-length
    return `<p>o principal dom da consciência é o dom da criação. como /ainda/ não temos consciência divina, acabamos criando situações e fatos que nos desequilibram, os ventos que tiram a nossa alma do nosso destino. esse é o motivo pelo qual criamos a 'bússola'. uma ferramenta simples e profunda que tem como objetivo o rememorar autêntico. um resgate ao <strong>verdadeiro compromisso</strong> que cada Ser veio entregar ao mundo /a começar pelo de dentro/. coração e visão. é o que desejamos a cada atitude pelo seu/nosso caminho.</p><p>afinal, eu sou um outro você.</p>` }
  getColabtext(): string{
    return `<p>a arte como expressão pura do Ser. a arte que fala pelas ruas, pelas roupas, pelos cartazes, pelos painéis. a arte como ferramenta de transformação, como ferramenta de ação, como ferramenta. em um mundo /ainda/ tão carente de amor, genuinidade e cura. <i>desburocratizar o afeto</i>, eis o objetivo de todas as <strong>co</strong>operações que realizamos com artistas que viraram nossos amigos e irmãos de jornada, de missão. <strong>lab</strong>oratório de aprendizes, onde experimentamos as profundezas daquilo que mora dentro, aqui é.</p><p>sinta.se livre e a vontade.</p>`;
  }
  getCultureGuide(): string{
    return `<p>guia = ato de direcionar</p><p>cultura = conjunto de crenças e valores que orientam as ações que realizamos dentro do nosso <i>campo</i>.</p><p>seu uso destina.se ao <strong>alinhamento</strong> de cada pessoa/Ser que habita a nossa empresa. o objetivo? unir.mo.nos dentro de um contexto de crenças e valores, que, minimamente partilha.se. uma família de aprendizes que se move por um único propósito e energia: iluminar dentro, para brilhar fora /não existe fora/.</p><p>do eu pro nós, do nós pro todo.</p>`;
  }
  getBrandManual(): string{
    return `<p>o nosso manual busca apresentar de forma clara e objetiva, todos os <strong>elementos de linguagem</strong> que utilizamos para manifestar com nobreza, a essência da nossa missão. a nossa marca é a expressão da nossa cultura. aquilo que valorizamos. as nossas crenças materializadas através de distintas formas, estilos e cores. traz consigo a capacidade de manifestar a essência da nossa energia em todos os serviços que consagramos. guiando com originalidade, a nossa expressão para o mundo. sistema de signos verbais que serve para expressar acima de tudo, o nosso posicionamento.</p><p>o nosso manual tem o papel de orientar todos aqueles que falam em nome da 1%.</p>`;
  }
  getStamp(): string{
    return `<p>uma <strong>social que possibilita</strong> que as intenções de uma empresa em fazer parte de um mundo melhor, se concretize em ações. um sistema criado para beneficiar /de forma recorrente/ o maior número de vidas possíveis. cultura social é a nossa bandeira. o nosso selo é conectado as <a href="http://www.agenda2030.com.br/" target="_blank" rel="noopener noreferrer">ODS</a> da ONU, uma missão planetária até o ano de 2030 para que possamos, como humanidade chegarmos vivos, sustentáveis e minimamente plenos. a <a [routerLink]="'assets/pdf/lei_difusão_da_inovacao.pdf'" routerLinkActive="router-link-active"  target="_blank" rel="noopener noreferrer">lei da difusão da inovação</a> é o mapa do trajeto que estamos percorrendo. a versão é eternamente beta.</p>`
  }
  getTree(): string{
    return `<p>uma <i>analogia</i> apresentada através de uma <i>metodologia</i> de cartas. uma <strong>ferramenta de luz</strong> que tem como inspiração, um fragmento da inteligência natural, da consciência divina. as <a href="https://www.ted.com/talks/suzanne_simard_how_trees_talk_to_each_other/transcript?language=pt" target="_blank" rel="noopener noreferrer">árvores</a> e sua forma de Ser nos inspiram a caminhar com mais leveza por essa jornada terrena. clareza, organização, movimento, conectividade, impermanência e ciclicidade. eis alguns dos benefícios desse presente.</p><p>que todos os seres possam se beneficiar.</p>`;
  }
  getMagazineText(): string{
    return `<p>só tivemos a oportunidade de celebrar 10 anos de história, porque centenas (quiçá milhares) de mãos entregaram a sua energia e o seu tempo em prol do nosso 'campo'. </p><p>12/12/2017: um dia atípico, único e intenso. </p><p>maktub.</p><p>esse ícone, é para <u>agradecer a todos os seres</u> que já deixaram um pouco (e um muito) de si, em nossa casa.</p><p>aqui, você poderá baixar todas as <a href="assets/pack/fotos_dez_anos.zip" target="_blank" rel="noopener noreferrer">fotos</a> desse lindo dia que tivemos. um registro sensível e amoroso da nossa querida amiga @sa.gabana.</p><p>caso queira conhecer a <a href="/assets/pdf/umporcento_dez_anos.pdf" target="_blank" rel="noopener noreferrer">revista</a> que criamos para celebrar a nossa primeira década, é só baixar livremente também. Material criado com o irmão @angeloborges, da @meteorabrands.</p><p>em missão, seguimos.</p>`;
  }
}
