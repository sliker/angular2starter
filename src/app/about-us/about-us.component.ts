import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { SITE_TITLE } from '../constants';

@Component({
    selector: 'my-app-about-us',
    templateUrl: './about-us.component.html'
})
export class AboutUsComponent {
    private titleService: Title;

    constructor(titleService: Title) {
        this.titleService = titleService;

        this.titleService.setTitle(`${SITE_TITLE} :: About Us`);
    }
}
