import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MobileHomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'home',
        component: MobileHomeComponent,
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
export class MobileRoutingModule {}
