import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CounterModule } from '../counter/counter.module';

@NgModule({
    imports: [
        CounterModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
