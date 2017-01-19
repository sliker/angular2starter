import { Component } from '@angular/core';

// Global sass styles
import '../sass/main.scss';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    devTools: boolean;

    constructor() {
        this.devTools = process.env.DEV_TOOLS || false;
    }
}
