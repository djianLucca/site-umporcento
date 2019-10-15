import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-btn',
  templateUrl: './download-btn.component.html',
  styleUrls: ['./download-btn.component.scss']
})
export class DownloadBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadFile() {
    window.open('/assets/pdf/BUUSSOLA_2019.pdf', '_blank');
  }

}
