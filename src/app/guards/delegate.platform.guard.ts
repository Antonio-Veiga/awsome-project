import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Platform } from '@ionic/angular';

export const DelegatePlatformGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const _router = inject(Router);
  const _platform = inject(Platform);

  const currUrl = state.url;
  const urlLookup = _platform.is('mobile') ? '/mobile' : '/desktop';

  if (currUrl.includes(urlLookup)) {
    return true;
  } else {
    return _router.parseUrl(urlLookup);
  }
};
