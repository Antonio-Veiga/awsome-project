import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelegatePlatformGuard } from '../guards/delegate.platform.guard';

export const appRoutes: Routes = [
  {
    path: 'mobile',
    canActivate: [DelegatePlatformGuard],
    loadChildren: () =>
      import('../pages/mobile/mobile.module').then((m) => m.MobileModule),
  },
  {
    path: 'desktop',
    canActivate: [DelegatePlatformGuard],
    loadChildren: () =>
      import('../pages/desktop/desktop.module').then((m) => m.DesktopModule),
  },
  {
    path: '**',
    redirectTo: 'mobile',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class BootstrapRoutingModule {}
