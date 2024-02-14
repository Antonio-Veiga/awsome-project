import { NgModule } from '@angular/core';
import { DesktopHomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { DesktopRoutingModule } from './desktop.routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DesktopHomeComponent],
  imports: [DesktopRoutingModule, CommonModule, SharedModule],
})
export class DesktopModule {}
