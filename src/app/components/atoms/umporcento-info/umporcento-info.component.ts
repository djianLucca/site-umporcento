import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-umporcento-info',
  templateUrl: './umporcento-info.component.html',
  styleUrls: ['./umporcento-info.component.scss']
})
export class UmporcentoInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadFile() {
      window.open('/assets/pdf/dados_cadastrais_umporcento.pdf', '_blank');
  }

  callWpp(){
    window.open('https://wa.me/5551997186040', '_blank')
  }

}
