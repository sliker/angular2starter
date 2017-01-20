import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { AboutUsRoutes } from './about-us/about-us.routes';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    ...HomeRoutes,
    ...AboutUsRoutes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
