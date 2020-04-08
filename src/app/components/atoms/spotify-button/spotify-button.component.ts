import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify-button',
  templateUrl: './spotify-button.component.html',
  styleUrls: ['./spotify-button.component.scss']
})
export class SpotifyButtonComponent implements OnInit {

  isVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility() {
    this.isVisible = true
  }

}
