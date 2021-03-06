import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

import { HomeRoutes } from './home/home.routes';
import { AboutUsRoutes } from './about-us/about-us.routes';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    ...AboutUsRoutes,
    ...HomeRoutes,
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
