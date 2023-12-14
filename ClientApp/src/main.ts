import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CalculatorModule } from './app/calculator.module';


platformBrowserDynamic().bootstrapModule(CalculatorModule)
  .catch(err => console.error(err));
