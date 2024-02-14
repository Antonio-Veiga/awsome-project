import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap.component';
import { MobileNavigationComponent } from '../navigation/mobile/navigation.component';
import { DesktopNavigationComponent } from '../navigation/desktop/navigation.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    MobileNavigationComponent,
    DesktopNavigationComponent,
    BootstrapComponent,
  ],
  imports: [BrowserModule, BootstrapRoutingModule, IonicModule.forRoot()],
  providers: [],
  bootstrap: [BootstrapComponent],
})
export class BootstrapModule {}
