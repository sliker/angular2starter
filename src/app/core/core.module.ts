import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        FooterComponent,
        MainNavComponent
    ],
    exports: [
        FooterComponent,
        MainNavComponent
    ]
})
export class CoreModule { }
