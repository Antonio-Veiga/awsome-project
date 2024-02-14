import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WorldComponent } from './_world/world-sandbox.component';

@NgModule({
  declarations: [WorldComponent],
  imports: [CommonModule],
  exports: [WorldComponent],
})
export class SharedModule {}
