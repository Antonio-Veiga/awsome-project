import { NgModule } from '@angular/core';
import { MobileRoutingModule } from './mobile.routing.module';
import { MobileHomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MobileHomeComponent],
  imports: [MobileRoutingModule, IonicModule],
})
export class MobileModule {}
