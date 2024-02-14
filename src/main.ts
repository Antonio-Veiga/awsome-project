import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BootstrapModule } from './app/bootstrap/bootstrap.module';

platformBrowserDynamic()
  .bootstrapModule(BootstrapModule)
  .catch((err) => console.error(err));
