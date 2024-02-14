import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesktopHomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'home',
        component: DesktopHomeComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class DesktopRoutingModule {}
