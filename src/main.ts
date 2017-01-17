import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootloader } from '@angularclass/hmr';

import { AppModule } from './app/app.module';
import { decorateModuleRef } from './environment';

if (process.env.ENV === 'production') {
    enableProdMode();
}

export function main(): Promise<any> {
    return platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .then(decorateModuleRef)
        .catch(err => console.error(err));
}

bootloader(main);
