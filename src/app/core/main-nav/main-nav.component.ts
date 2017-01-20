import { Component } from '@angular/core';

@Component({
    selector: 'my-app-layout-header',
    templateUrl: 'main-nav.component.html',
    styleUrls: ['main-nav.component.scss']
})
export class MainNavComponent {
    menuItems: Object[] = [
        {
            name: 'Home',
            path: '/home'
        },
        {
            name: 'About us',
            path: '/about-us'
        }
    ];
}
