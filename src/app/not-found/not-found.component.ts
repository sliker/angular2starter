import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {
    pathUrl: string;

    private route: ActivatedRoute;

    constructor(route: ActivatedRoute) {
        this.route = route;
        this.pathUrl = '';
    }

    ngOnInit() {
        this.pathUrl = this.route.snapshot.url.map(url => {
            return url.path;
        }).join('/');
    }
}
