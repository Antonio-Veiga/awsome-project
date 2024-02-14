import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { APP_PAGES, APP_TITLE } from '../data/data.defs';

@Component({
  selector: 'bootstrapper',
  templateUrl: './bootstrap.component.html',
  styleUrl: './bootstrap.component.scss',
})
export class BootstrapComponent {
  public appTitle = APP_TITLE;
  public availablePages = APP_PAGES;
  public isMobileDevice?: boolean;

  constructor(_platform: Platform) {
    this.isMobileDevice = _platform.is('mobile');
  }
}
