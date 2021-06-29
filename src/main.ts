import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppConfig } from "./app/config/app.config";


(async () => {
  try {
    await AppConfig.load();
    if (AppConfig.settings.production) {
      enableProdMode();
    }
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  } catch (err) {
    console.log('Init failed')
  }
})()
