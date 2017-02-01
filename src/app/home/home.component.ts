import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { siteTitle } from '../constants';

@Component({
    selector: 'my-app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    private titleService: Title;

    constructor(titleService: Title) {
        this.titleService = titleService;

        this.titleService.setTitle(`Home :: ${siteTitle}`);
    }
}
