import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { APP_PAGES } from '../../data/data.defs';
import { INavigation } from '../../interfaces/component.interface.defs';

@Component({
  selector: 'mobile-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class MobileNavigationComponent implements INavigation {
  public primaryPages = APP_PAGES;

  public smallDevice: boolean;
  public menuOpened = false;
  public menuCollapsed = false;
  public pagePrefix = './mobile';

  constructor(_platform: Platform) {
    this.smallDevice = !(_platform.is('tablet') || _platform.is('ipad'));
  }

  handleMenuResize() {
    this.menuCollapsed = !this.menuCollapsed;
  }
}
