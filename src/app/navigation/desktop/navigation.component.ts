import { Component } from '@angular/core';
import { INavigation } from '../../interfaces/component.interface.defs';
import { APP_PAGES } from '../../data/data.defs';

@Component({
  selector: 'desktop-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class DesktopNavigationComponent implements INavigation {
  public primaryPages = APP_PAGES;
  public pagePrefix = './desktop';
}
